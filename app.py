import os
from datetime import datetime, timezone, timedelta
from uuid import uuid4

from flask import (
    Flask,
    render_template,
    request,
    redirect,
    url_for,
    flash,
    jsonify,
    abort,
    session,
)

try:
    import firebase_admin
    from firebase_admin import credentials, firestore
    try:
        from firebase_admin import messaging as fcm
    except Exception:
        fcm = None
except Exception:
    firebase_admin = None
    credentials = None
    firestore = None
    fcm = None


def create_app():
    # Lightweight .env loader (no extra dependency)
    try:
        env_path = os.path.join(os.getcwd(), ".env")
        if os.path.exists(env_path):
            with open(env_path, "r", encoding="utf-8") as f:
                for line in f:
                    line = line.strip()
                    if not line or line.startswith("#"):
                        continue
                    if "=" in line:
                        k, v = line.split("=", 1)
                        k = k.strip()
                        v = v.strip().strip('"').strip("'")
                        os.environ.setdefault(k, v)
    except Exception:
        pass
    app = Flask(__name__)
    app.secret_key = os.environ.get("SECRET_KEY", "dev-secret-key-change")
    # Simple SSE broadcaster (fallback realtime)
    import threading, queue
    subscribers = set()
    subs_lock = threading.Lock()
    def broadcast(event: str, data: dict):
        payload = {"event": event, "data": data}
        with subs_lock:
            dead = []
            for q in list(subscribers):
                try:
                    q.put_nowait(payload)
                except Exception:
                    dead.append(q)
            for q in dead:
                subscribers.discard(q)

    # Storage layer (Firestore or local demo)
    cred_path = os.path.join(os.getcwd(), "serviceAccountKey.json")
    use_firestore = False
    # Prefer emulator if specified; guard when firebase_admin is unavailable
    if firebase_admin is not None:
        if os.environ.get("FIRESTORE_EMULATOR_HOST"):
            try:
                if not getattr(firebase_admin, "_apps", []):
                    firebase_admin.initialize_app(options={
                        "projectId": os.environ.get("FIREBASE_PROJECT_ID", "menfes-unbin-emulator")
                    })
                use_firestore = True
            except Exception:
                use_firestore = False
        elif (not getattr(firebase_admin, "_apps", [])) and os.path.exists(cred_path):
            try:
                cred = credentials.Certificate(cred_path)
                firebase_admin.initialize_app(cred)
                use_firestore = True
            except Exception:
                use_firestore = False
        elif getattr(firebase_admin, "_apps", []):
            use_firestore = True
        else:
            # Attempt default credentials (e.g., Cloud Run / GCE / ADC)
            try:
                firebase_admin.initialize_app()
                use_firestore = True
            except Exception:
                use_firestore = False
    else:
        use_firestore = False

    # Optional override for local dev: force LocalStore
    if os.environ.get("DISABLE_FIRESTORE") == "1":
        use_firestore = False

    db = firestore.client() if use_firestore else None

    # ---- Data access abstraction ----
    class Store:
        def list_posts(self):
            raise NotImplementedError
        def create_post(self, data):
            raise NotImplementedError
        def get_post(self, post_id):
            raise NotImplementedError
        def add_comment(self, post_id, text):
            raise NotImplementedError
        def list_comments(self, post_id):
            raise NotImplementedError
        def increment_like(self, post_id):
            raise NotImplementedError
        def admin_list_posts(self):
            raise NotImplementedError
        def set_status(self, post_id, status):
            raise NotImplementedError
        def trending_posts(self):
            raise NotImplementedError

    class FirestoreStore(Store):
        def list_posts(self):
            ref = (
                db.collection("posts")
                .where("status", "==", "Approved")
                .order_by("created_at", direction=firestore.Query.DESCENDING)
            )
            return [ (d.id, d.to_dict()) for d in ref.stream() ]

        def _extract_mentions(self, text: str):
            try:
                import re
                if not text:
                    return []
                # match @username (letters, numbers, underscore, #)
                return list({m.group(1) for m in re.finditer(r"@([A-Za-z0-9_#]+)", text)})
            except Exception:
                return []

        def create_post(self, data):
            post_id = uuid4().hex
            # mentions from content and target
            mentions = []
            try:
                c = (data.get("content") or "") + "\n" + (data.get("to") or "")
                mentions = self._extract_mentions(c)
            except Exception:
                mentions = []
            db.collection("posts").document(post_id).set({**data, "mentions": mentions})
            # Notify mentioned users on post creation
            try:
                if mentions:
                    resolved = []
                    for handle in mentions:
                        try:
                            q = db.collection('users').where('username','==',handle).limit(10).stream()
                            for udoc in q:
                                u = udoc.to_dict() or {}
                                uid = u.get('uid') or udoc.id
                                if uid:
                                    resolved.append(uid)
                        except Exception:
                            continue
                    for rid in resolved:
                        nid = uuid4().hex
                        msg = f"{data.get('name') or 'Pengguna'} menyebutmu dalam menfess baru"
                        db.collection('notifications').document(nid).set({
                            'id': nid,
                            'sender_uid': data.get('author_uid'),
                            'receiver_uid': rid,
                            'post_id': post_id,
                            'comment_id': None,
                            'type': 'mention',
                            'message': msg,
                            'read': False,
                            'created_at': datetime.now(timezone.utc),
                        })
                        try:
                            if fcm is not None:
                                tokens_docs = db.collection('fcm_tokens').where('uid','==', rid).stream()
                                tokens = [ (td.to_dict() or {}).get('token') for td in tokens_docs ]
                                tokens = [t for t in tokens if t]
                                if tokens:
                                    fcm.send_multicast(fcm.MulticastMessage(
                                        tokens=tokens,
                                        notification=fcm.Notification(title='Menfes UNBIN', body=msg),
                                        data={'type':'mention','post_id':post_id}
                                    ))
                        except Exception:
                            pass
            except Exception:
                pass
            # optional: notify admin of new post
            try:
                admin_uid = os.environ.get("ADMIN_UID")
                if admin_uid and data.get("author_uid") and admin_uid != data.get("author_uid"):
                    nid = uuid4().hex
                    db.collection("notifications").document(nid).set({
                        "id": nid,
                        "sender_uid": data.get("author_uid"),
                        "receiver_uid": admin_uid,
                        "post_id": post_id,
                        "comment_id": None,
                        "type": "create",
                        "message": "Posting baru dari pengguna",
                        "read": False,
                        "created_at": datetime.now(timezone.utc),
                    })
            except Exception:
                pass
            return post_id

        def get_post(self, post_id):
            snap = db.collection("posts").document(post_id).get()
            return snap.id, (snap.to_dict() if snap.exists else None)

        def add_comment(self, post_id, text, author_uid=None, by_admin=False, sender_name=None):
            comment_id = uuid4().hex
            mentions = self._extract_mentions(text)
            db.collection("posts").document(post_id).collection("comments").document(comment_id).set({
                "text": text,
                "author_uid": author_uid,
                "by_admin": by_admin,
                "author_name": sender_name,
                "mentions": mentions,
                "created_at": datetime.now(timezone.utc),
            })
            db.collection("posts").document(post_id).update({"comments_count": firestore.Increment(1)})
            # Create notification to post owner if author exists
            try:
                ps = db.collection("posts").document(post_id).get()
                owner_uid = (ps.to_dict() or {}).get("author_uid")
                if owner_uid and author_uid and owner_uid != author_uid:
                    nid = uuid4().hex
                    msg = ("Admin membalas komentarmu" if by_admin else f"{sender_name or 'Pengguna'} mengomentari postinganmu")
                    db.collection("notifications").document(nid).set({
                        "id": nid,
                        "sender_uid": author_uid,
                        "receiver_uid": owner_uid,
                        "post_id": post_id,
                        "comment_id": comment_id,
                        "type": "comment",
                        "message": msg,
                        "actor_is_admin": bool(by_admin),
                        "actor_name": sender_name or "",
                        "read": False,
                        "created_at": datetime.now(timezone.utc),
                    })
                    # Try to send FCM to receiver tokens
                    try:
                        if fcm is not None:
                            tokens_docs = db.collection('fcm_tokens').where('uid','==', owner_uid).stream()
                            tokens = [ (td.to_dict() or {}).get('token') for td in tokens_docs ]
                            tokens = [t for t in tokens if t]
                            if tokens:
                                data_payload = {'type':'comment','post_id':post_id,'comment_id':comment_id}
                                if by_admin:
                                    data_payload['admin'] = 'true'
                                fcm.send_multicast(fcm.MulticastMessage(
                                    tokens=tokens,
                                    notification=fcm.Notification(title='Menfes UNBIN', body=msg),
                                    data=data_payload
                                ))
                    except Exception:
                        pass
            except Exception:
                pass
            try:
                broadcast("comment", {"post_id": post_id})
            except Exception:
                pass
            # Notify mentioned users
            try:
                if mentions:
                    # Resolve mentioned usernames to user UIDs via users collection
                    resolved = []
                    for handle in mentions:
                        try:
                            q = db.collection('users').where('username', '==', handle).limit(10).stream()
                            for udoc in q:
                                u = udoc.to_dict() or {}
                                uid = u.get('uid') or udoc.id
                                if uid:
                                    resolved.append(uid)
                        except Exception:
                            continue
                    for rid in resolved:
                        nid = uuid4().hex
                        msg = f"{sender_name or 'Pengguna'} menyebutmu dalam komentar"
                        db.collection('notifications').document(nid).set({
                            'id': nid,
                            'sender_uid': author_uid,
                            'receiver_uid': rid,
                            'post_id': post_id,
                            'comment_id': comment_id,
                            'type': 'mention',
                            'message': msg,
                            'read': False,
                            'created_at': datetime.now(timezone.utc),
                        })
                        # Send FCM to receiver tokens
                        try:
                            if fcm is not None:
                                tokens_docs = db.collection('fcm_tokens').where('uid', '==', rid).stream()
                                tokens = [ (td.to_dict() or {}).get('token') for td in tokens_docs ]
                                tokens = [t for t in tokens if t]
                                if tokens:
                                    fcm.send_multicast(fcm.MulticastMessage(
                                        tokens=tokens,
                                        notification=fcm.Notification(
                                            title='Menfes UNBIN',
                                            body=msg,
                                        ),
                                        data={'type':'mention','post_id':post_id,'comment_id':comment_id}
                                    ))
                        except Exception:
                            pass
            except Exception:
                pass

        def list_comments(self, post_id):
            ref = (
                db.collection("posts").document(post_id)
                .collection("comments")
                .order_by("created_at", direction=firestore.Query.ASCENDING)
            )
            return [ (c.id, c.to_dict()) for c in ref.stream() ]

        def increment_like(self, post_id, sender_uid=None):
            post_ref = db.collection("posts").document(post_id)
            def txn_op(txn):
                snap = post_ref.get(transaction=txn)
                if not snap.exists:
                    raise ValueError("not_found")
                likes = int(snap.get("likes") or 0) + 1
                txn.update(post_ref, {"likes": likes})
                # notify owner
                try:
                    owner_uid = (snap.to_dict() or {}).get("author_uid")
                    if owner_uid and sender_uid and owner_uid != sender_uid:
                        nid = uuid4().hex
                        db.collection("notifications").document(nid).set({
                            "id": nid,
                            "sender_uid": sender_uid,
                            "receiver_uid": owner_uid,
                            "post_id": post_id,
                            "comment_id": None,
                            "type": "like",
                            "message": "Postinganmu disukai",
                            "read": False,
                            "created_at": datetime.now(timezone.utc),
                        })
                except Exception:
                    pass
                try:
                    broadcast("like", {"post_id": post_id, "likes": likes})
                except Exception:
                    pass
                return likes
            return db.transaction()(txn_op)

        def increment_share(self, post_id, sender_uid=None, sender_name=None):
            post_ref = db.collection("posts").document(post_id)
            def txn_op(txn):
                snap = post_ref.get(transaction=txn)
                if not snap.exists:
                    raise ValueError("not_found")
                shares = int(snap.get("shares") or 0) + 1
                txn.update(post_ref, {"shares": shares})
                # notify owner
                try:
                    owner_uid = (snap.to_dict() or {}).get("author_uid")
                    if owner_uid and sender_uid and owner_uid != sender_uid:
                        nid = uuid4().hex
                        db.collection("notifications").document(nid).set({
                            "id": nid,
                            "sender_uid": sender_uid,
                            "receiver_uid": owner_uid,
                            "post_id": post_id,
                            "comment_id": None,
                            "type": "share",
                            "message": f"{sender_name or 'Pengguna'} membagikan menfess kamu",
                            "read": False,
                            "created_at": datetime.now(timezone.utc),
                        })
                except Exception:
                    pass
                return shares
            return db.transaction()(txn_op)

        def admin_list_posts(self):
            ref = db.collection("posts").order_by("created_at", direction=firestore.Query.DESCENDING)
            return [ (d.id, d.to_dict()) for d in ref.stream() ]

        def set_status(self, post_id, status):
            db.collection("posts").document(post_id).set({"status": status}, merge=True)

        def trending_posts(self):
            ref = (
                db.collection("posts")
                .where("status", "==", "Approved")
                .order_by("likes", direction=firestore.Query.DESCENDING)
            )
            posts = [ (d.id, d.to_dict()) for d in ref.stream() ]
            posts.sort(key=lambda x: (int((x[1] or {}).get("likes", 0) or 0), int((x[1] or {}).get("comments_count", 0) or 0)), reverse=True)
            return posts

    class LocalStore(Store):
        def __init__(self):
            self.posts = []  # list of dicts with id
            self.comments = {}  # post_id -> list of dicts

        def _extract_mentions(self, text: str):
            try:
                import re
                if not text:
                    return []
                return list({m.group(1) for m in re.finditer(r"@([A-Za-z0-9_#]+)", text)})
            except Exception:
                return []

        def list_posts(self):
            items = [ (p["id"], p) for p in self.posts if p.get("status") == "Approved" ]
            items.sort(key=lambda x: x[1].get("created_at") or datetime.now(timezone.utc), reverse=True)
            return items

        def create_post(self, data):
            post_id = uuid4().hex
            try:
                c = (data.get("content") or "") + "\n" + (data.get("to") or "")
                mentions = self._extract_mentions(c)
            except Exception:
                mentions = []
            item = {"id": post_id, **data, "mentions": mentions}
            self.posts.append(item)
            try:
                broadcast("post", {"post_id": post_id})
            except Exception:
                pass
            return post_id

        def get_post(self, post_id):
            for p in self.posts:
                if p["id"] == post_id:
                    return p["id"], p
            return post_id, None

        def add_comment(self, post_id, text, author_uid=None, by_admin=False, sender_name=None):
            c = {
                "id": uuid4().hex,
                "text": text,
                "author_uid": author_uid,
                "by_admin": by_admin,
                "author_name": sender_name,
                "mentions": self._extract_mentions(text),
                "created_at": datetime.now(timezone.utc),
            }
            self.comments.setdefault(post_id, []).append(c)
            # increment count
            for p in self.posts:
                if p["id"] == post_id:
                    p["comments_count"] = int(p.get("comments_count", 0) or 0) + 1
                    break
            try:
                broadcast("comment", {"post_id": post_id})
            except Exception:
                pass

        def list_comments(self, post_id):
            return [ (c["id"], c) for c in self.comments.get(post_id, []) ]

        def increment_like(self, post_id, sender_uid=None):
            for p in self.posts:
                if p["id"] == post_id:
                    p["likes"] = int(p.get("likes", 0) or 0) + 1
                    try:
                        broadcast("like", {"post_id": post_id, "likes": p["likes"]})
                    except Exception:
                        pass
                    return p["likes"]
            raise ValueError("not_found")

        def increment_share(self, post_id, sender_uid=None, sender_name=None):
            for p in self.posts:
                if p["id"] == post_id:
                    p["shares"] = int(p.get("shares", 0) or 0) + 1
                    return p["shares"]
            raise ValueError("not_found")

        def admin_list_posts(self):
            items = [ (p["id"], p) for p in self.posts ]
            items.sort(key=lambda x: x[1].get("created_at") or datetime.now(timezone.utc), reverse=True)
            return items

        def set_status(self, post_id, status):
            for p in self.posts:
                if p["id"] == post_id:
                    p["status"] = status
                    break

        def trending_posts(self):
            items = [ (p["id"], p) for p in self.posts if p.get("status") == "Approved" ]
            items.sort(key=lambda x: (int(x[1].get("likes", 0) or 0), int(x[1].get("comments_count", 0) or 0)), reverse=True)
            return items

    store: Store = FirestoreStore() if use_firestore else LocalStore()

    def post_to_view(post_id: str, data: dict):
        if not data:
            return None
        created_at = data.get("created_at")
        created_display = ""
        created_iso = ""
        if isinstance(created_at, datetime):
            # Properly convert to WIB (UTC+7)
            try:
                wib_tz = timezone(timedelta(hours=7))
                wib = created_at.astimezone(wib_tz)
                created_display = wib.strftime("%d/%m/%Y %H:%M WIB")
                created_iso = created_at.astimezone(timezone.utc).isoformat()
            except Exception:
                # Fallback to UTC if conversion fails
                created_display = created_at.strftime("%d/%m/%Y %H:%M WIB")
                created_iso = created_at.isoformat()
        return {
            "id": post_id,
            "name": data.get("name", "Anon"),
            "to": data.get("to", data.get("university", "-")),
            "content": data.get("content", ""),
            "mood": data.get("mood", "-"),
            "likes": int(data.get("likes", 0) or 0),
            "comments_count": int(data.get("comments_count", 0) or 0),
            "created_at": created_display,
            "created_iso": created_iso,
            "author_uid": data.get("author_uid"),
        }

    def is_admin():
        return bool(session.get("is_admin"))

    def require_admin():
        if not is_admin():
            return redirect(url_for("login", next=request.path))
        return None

    @app.route("/")
    def index():
        posts = [ post_to_view(pid, data) for pid, data in store.list_posts() ]
        return render_template("index.html", posts=posts)

    @app.route("/add", methods=["GET", "POST"])
    def add_post():
        if request.method == "POST":
            name = request.form.get("name", "").strip() or "Anon"
            to_user = request.form.get("to", "").strip()
            content = request.form.get("content", "").strip()
            mood = request.form.get("mood", "").strip()
            author_uid = request.form.get("uid") or None

            if not to_user or not content or not mood:
                flash("Semua kolom wajib diisi.", "error")
                return redirect(url_for("add_post"))

            data = {
                "name": name,
                "to": to_user,
                "content": content,
                "mood": mood,
                "likes": 0,
                "shares": 0,
                "comments_count": 0,
                "created_at": datetime.now(timezone.utc),
                "author_uid": author_uid,
                "status": "Approved",  # default visible
            }
            post_id = store.create_post(data)
            try:
                broadcast("post", {"post_id": post_id})
            except Exception:
                pass
            flash("Pesan terkirim!", "success")
            return redirect(url_for("index"))

        return render_template("add_post.html")

    @app.route("/post/<post_id>")
    def post_detail(post_id):
        pid, data = store.get_post(post_id)
        if not data:
            abort(404)
        if data.get("status") != "Approved" and not is_admin():
            abort(404)
        post = post_to_view(pid, data)
        comments = []
        for cid, d in store.list_comments(post_id):
            created_at = d.get("created_at")
            created_display = ""
            created_iso = ""
            if isinstance(created_at, datetime):
                try:
                    wib_tz = timezone(timedelta(hours=7))
                    wib = created_at.astimezone(wib_tz)
                    created_display = wib.strftime("%d/%m/%Y %H:%M WIB")
                    created_iso = created_at.astimezone(timezone.utc).isoformat()
                except Exception:
                    created_display = created_at.strftime("%d/%m/%Y %H:%M WIB")
                    created_iso = created_at.isoformat()
            comments.append({
                "id": cid,
                "text": d.get("text", ""),
                "created_at": created_display,
                "created_iso": created_iso,
                "by_admin": bool(d.get("by_admin")),
                "author_uid": d.get("author_uid"),
            })
        # author uid for client-side check
        post["author_uid"] = data.get("author_uid")
        return render_template("post_detail.html", post=post, comments=comments)

    @app.route("/post/<post_id>/comment", methods=["POST"])
    def add_comment(post_id):
        text = request.form.get("comment", "").strip()
        author_uid = request.form.get("uid") or None
        sender_name = ("Admin" if is_admin() else (request.form.get("commenter_name", "").strip() or "Anon"))
        if not text:
            flash("Komentar tidak boleh kosong.", "error")
            return redirect(url_for("post_detail", post_id=post_id))

        _, pd = store.get_post(post_id)
        if not pd:
            abort(404)

        store.add_comment(post_id, text, author_uid=author_uid, by_admin=is_admin(), sender_name=sender_name)

        flash("Komentar terkirim!", "success")
        return redirect(url_for("post_detail", post_id=post_id))

    @app.route("/post/<post_id>/like", methods=["POST"]) 
    def like_post(post_id):
        try:
            _, pd = store.get_post(post_id)
            if not pd:
                return jsonify({"ok": False, "error": "not_found"}), 404
            sender_uid = request.headers.get("X-UID") or None
            likes, liked = toggle_like(post_id, sender_uid)
            try:
                broadcast("like", {"post_id": post_id, "likes": likes})
            except Exception:
                pass
            return jsonify({"ok": True, "likes": likes, "liked": liked})
        except Exception:
            return jsonify({"ok": False}), 500

    # Alias path requested by spec
    @app.route("/like_post/<post_id>", methods=["POST"]) 
    def like_post_alias(post_id):
        return like_post(post_id)

    # Helper to toggle like with per-user constraint
    def toggle_like(post_id: str, sender_uid: str | None):
        if not sender_uid:
            # generate a temporary header-based uid for anonymous if not present
            sender_uid = request.cookies.get('mf_uid') or request.headers.get('X-UID') or None
        if db is not None:
            # Firestore implementation: likes subcollection keyed by uid
            post_ref = firestore.client().collection("posts").document(post_id)
            like_ref = post_ref.collection("likes").document(sender_uid or "anon")
            def txn(txn_obj):
                post_snap = txn_obj.get(post_ref)
                if not post_snap.exists:
                    raise ValueError("not_found")
                liked_now = True
                like_snap = txn_obj.get(like_ref)
                if like_snap.exists:
                    # Unlike
                    txn_obj.delete(like_ref)
                    liked_now = False
                    new_likes = max(0, int(post_snap.get("likes") or 0) - 1)
                else:
                    txn_obj.set(like_ref, {"uid": sender_uid, "liked_at": datetime.now(timezone.utc)})
                    new_likes = int(post_snap.get("likes") or 0) + 1
                txn_obj.update(post_ref, {"likes": new_likes})
                # Notify only on like (not unlike)
                if liked_now:
                    try:
                        owner_uid = (post_snap.to_dict() or {}).get("author_uid")
                        if owner_uid and sender_uid and owner_uid != sender_uid:
                            nid = uuid4().hex
                            firestore.client().collection("notifications").document(nid).set({
                                "id": nid,
                                "sender_uid": sender_uid,
                                "receiver_uid": owner_uid,
                                "post_id": post_id,
                                "comment_id": None,
                                "type": "like",
                                "message": "Postinganmu disukai",
                                "read": False,
                                "created_at": datetime.now(timezone.utc),
                            })
                    except Exception:
                        pass
                return new_likes, liked_now
            return firestore.client().transaction()(txn)
        else:
            # Local store toggling
            # Find post
            liked_now = True
            for p in store.posts:
                if p["id"] == post_id:
                    liked_set = p.setdefault("_liked_by", set())
                    key = sender_uid or "anon"
                    if key in liked_set:
                        liked_set.remove(key)
                        p["likes"] = max(0, int(p.get("likes", 0) or 0) - 1)
                        liked_now = False
                    else:
                        liked_set.add(key)
                        p["likes"] = int(p.get("likes", 0) or 0) + 1
                    return p["likes"], liked_now
            raise ValueError("not_found")

    @app.post("/share_post/<post_id>")
    def share_post(post_id):
        try:
            _, pd = store.get_post(post_id)
            if not pd:
                return jsonify({"ok": False, "error": "not_found"}), 404
            sender_uid = request.headers.get("X-UID") or None
            sender_name = request.headers.get("X-Name") or None
            shares = store.increment_share(post_id, sender_uid=sender_uid, sender_name=sender_name)
            return jsonify({"ok": True, "shares": shares})
        except Exception:
            return jsonify({"ok": False}), 500

    # SSE stream for fallback realtime when Firebase client is not configured
    @app.route('/stream')
    def stream():
        import json
        q = queue.Queue()
        with subs_lock:
            subscribers.add(q)
        def gen():
            try:
                while True:
                    item = q.get()
                    yield f"event: {item['event']}\n".encode()
                    yield f"data: {json.dumps(item['data'])}\n\n".encode()
            except GeneratorExit:
                with subs_lock:
                    subscribers.discard(q)
        from flask import Response
        return Response(gen(), mimetype='text/event-stream')

    @app.route("/trending")
    def trending():
        posts = [ post_to_view(pid, data) for pid, data in store.trending_posts() ]
        return render_template("trending.html", posts=posts)

    @app.route("/about")
    def about():
        return render_template("about.html")

    @app.route("/stats")
    def stats():
        # Aggregate public stats
        import collections
        total_posts = 0
        total_likes = 0
        total_comments = 0
        mood_counter = collections.Counter()
        mention_counter = collections.Counter()
        daily_counter = collections.Counter()

        def bump_day(dt: datetime):
            try:
                key = dt.astimezone(timezone(timedelta(hours=7))).strftime("%Y-%m-%d")
            except Exception:
                key = dt.strftime("%Y-%m-%d")
            daily_counter[key] += 1

        if db is not None:
            # Firestore aggregate by scanning approved posts
            posts = firestore.client().collection('posts').where('status','==','Approved').stream()
            post_ids = []
            for ps in posts:
                d = ps.to_dict() or {}
                total_posts += 1
                total_likes += int(d.get('likes', 0) or 0)
                total_comments += int(d.get('comments_count', 0) or 0)
                if d.get('mood'): mood_counter[d['mood']] += 1
                for m in (d.get('mentions') or []): mention_counter[m] += 1
                ca = d.get('created_at')
                if isinstance(ca, datetime): bump_day(ca)
                post_ids.append(ps.id)
            # collect mentions in comments
            for pid in post_ids:
                try:
                    for cm in firestore.client().collection('posts').document(pid).collection('comments').stream():
                        cd = cm.to_dict() or {}
                        for m in (cd.get('mentions') or []): mention_counter[m] += 1
                except Exception:
                    pass
        else:
            for _pid, d in store.list_posts():
                total_posts += 1
                total_likes += int(d.get('likes', 0) or 0)
                total_comments += int(d.get('comments_count', 0) or 0)
                if d.get('mood'): mood_counter[d['mood']] += 1
                for m in (d.get('mentions') or []): mention_counter[m] += 1
                ca = d.get('created_at')
                if isinstance(ca, datetime): bump_day(ca)
            # comments mentions
            if isinstance(store, LocalStore):
                for pid, clist in (store.comments or {}).items():
                    for c in clist:
                        for m in (c.get('mentions') or []): mention_counter[m] += 1

        top_moods = mood_counter.most_common(5)
        top_mentions = mention_counter.most_common(10)
        # last 7 days series
        from datetime import date
        today = datetime.now(timezone.utc).astimezone(timezone(timedelta(hours=7))).date()
        days = [(today - timedelta(days=i)).strftime('%Y-%m-%d') for i in range(6, -1, -1)]
        daily_series = [{ 'day': d, 'count': int(daily_counter.get(d, 0)) } for d in days]

        return render_template('stats.html', stats={
            'total_posts': total_posts,
            'total_likes': total_likes,
            'total_comments': total_comments,
            'top_moods': top_moods,
            'top_mentions': top_mentions,
            'daily': daily_series,
        })

    @app.get('/firebase-config.js')
    def firebase_config_js():
        api_key = os.environ.get('FIREBASE_API_KEY')
        project_id = os.environ.get('FIREBASE_PROJECT_ID') or os.environ.get('GOOGLE_CLOUD_PROJECT')
        auth_domain = os.environ.get('FIREBASE_AUTH_DOMAIN') or (f"{project_id}.firebaseapp.com" if project_id else None)
        storage_bucket = os.environ.get('FIREBASE_STORAGE_BUCKET') or (f"{project_id}.appspot.com" if project_id else None)
        msg_sender = os.environ.get('FIREBASE_MESSAGING_SENDER_ID')
        app_id = os.environ.get('FIREBASE_APP_ID')
        vapid_key = os.environ.get('FIREBASE_VAPID_KEY')
        # Build JS only if we have at least projectId; apiKey recommended
        parts = []
        parts.append('window.FIREBASE_CONFIG = window.FIREBASE_CONFIG || {};')
        if project_id:
            parts.append(f"window.FIREBASE_CONFIG.projectId = '{project_id}';")
        if api_key:
            parts.append(f"window.FIREBASE_CONFIG.apiKey = '{api_key}';")
        if auth_domain:
            parts.append(f"window.FIREBASE_CONFIG.authDomain = '{auth_domain}';")
        if storage_bucket:
            parts.append(f"window.FIREBASE_CONFIG.storageBucket = '{storage_bucket}';")
        if msg_sender:
            parts.append(f"window.FIREBASE_CONFIG.messagingSenderId = '{msg_sender}';")
        if app_id:
            parts.append(f"window.FIREBASE_CONFIG.appId = '{app_id}';")
        if msg_sender and vapid_key:
            parts.append(f"window.FIREBASE_VAPID_KEY = '{vapid_key}';")
        parts.append('window.USE_FIRESTORE_EMULATOR = false;')
        # Also expose to service worker global
        parts.append('try{ self.FIREBASE_CONFIG = Object.assign(self.FIREBASE_CONFIG||{}, window.FIREBASE_CONFIG) }catch(e){}')
        from flask import Response
        return Response("\n".join(parts), mimetype='application/javascript')

    # Serve messaging service worker from app when using Cloud Run rewrite
    @app.get('/firebase-messaging-sw.js')
    def firebase_messaging_sw():
        from flask import send_from_directory
        pub = os.path.join(os.getcwd(), 'public')
        return send_from_directory(pub, 'firebase-messaging-sw.js', mimetype='application/javascript')

    # Edit post (soft owner check via uid)
    @app.route("/post/<post_id>/edit", methods=["GET", "POST"])
    def edit_post(post_id):
        pid, data = store.get_post(post_id)
        if not data:
            abort(404)
        owner = data.get("author_uid")
        if request.method == "POST":
            uid = request.form.get("uid")
            if not (is_admin() or (owner and uid and uid == owner)):
                abort(403)
            content = request.form.get("content", "").strip()
            mood = request.form.get("mood", "").strip() or data.get("mood")
            to_user = request.form.get("to", "").strip() or data.get("to") or data.get("university")
            if not content:
                flash("Isi tidak boleh kosong.", "error")
                return redirect(url_for("edit_post", post_id=post_id))
            # Update directly using Firestore when available
            if db is not None:
                firestore.client().collection("posts").document(post_id).set({
                    "content": content,
                    "mood": mood,
                    "to": to_user,
                    "updated_at": datetime.now(timezone.utc),
                }, merge=True)
            else:
                # Local store update
                for p in store.posts:
                    if p["id"] == post_id:
                        p["content"] = content
                        p["mood"] = mood
                        p["to"] = to_user
                        p["updated_at"] = datetime.now(timezone.utc)
                        break
            flash("Post diperbarui.", "success")
            return redirect(url_for("post_detail", post_id=post_id))
        # GET: reuse add_post template with initial values
        init = {
            "id": pid,
            "name": data.get("name", "Anon"),
            "to": data.get("to", data.get("university", "")),
            "mood": data.get("mood", ""),
            "content": data.get("content", ""),
        }
        return render_template("add_post.html", edit=True, post=init)

    @app.post("/post/<post_id>/delete")
    def delete_post(post_id):
        pid, data = store.get_post(post_id)
        if not data:
            abort(404)
        owner = data.get("author_uid")
        uid = request.form.get("uid")
        if not (is_admin() or (owner and uid and uid == owner)):
            abort(403)
        store.set_status(post_id, "Deleted")
        flash("Post dihapus.", "info")
        return redirect(url_for("index"))

    @app.route("/admin")
    def admin():
        guard = require_admin()
        if guard:
            return guard
        posts_stream = store.admin_list_posts()
        items = []
        total_likes = 0
        total_comments = 0
        for pid, doc in posts_stream:
            total_likes += int(doc.get("likes", 0) or 0)
            total_comments += int(doc.get("comments_count", 0) or 0)
            items.append({
                "id": pid,
                "name": doc.get("name", "Anon"),
                "to": doc.get("to", doc.get("university", "-")),
                "content_short": (doc.get("content", "")[:100] + ("…" if len(doc.get("content", "")) > 100 else "")),
                "mood": doc.get("mood", "-"),
                "status": doc.get("status", "Approved"),
                "likes": int(doc.get("likes", 0) or 0),
                "comments_count": int(doc.get("comments_count", 0) or 0),
            })
        return render_template(
            "admin.html",
            stats={
                "total_posts": len(list(posts_stream)),
                "total_likes": total_likes,
                "total_comments": total_comments,
            },
            posts=items,
        )

    @app.post("/admin/approve/<post_id>")
    def admin_approve(post_id):
        guard = require_admin()
        if guard:
            return guard
        store.set_status(post_id, "Approved")
        flash("Post di-approve.", "success")
        return redirect(url_for("admin"))

    @app.route("/admin/roles", methods=["GET", "POST"])
    def admin_roles():
        guard = require_admin()
        if guard:
            return guard
        msg = None
        err = None
        last = None
        if request.method == 'POST':
            target_uid = request.form.get('uid', '').strip()
            username = request.form.get('username', '').strip()
            role = request.form.get('role', '').strip() or 'user'
            try:
                if db is None:
                    err = 'Firestore tidak tersedia.'
                else:
                    uid = target_uid
                    if not uid and username:
                        q = firestore.client().collection('users').where('username','==', username).limit(1).stream()
                        for udoc in q:
                            uid = udoc.id
                            break
                    if not uid:
                        err = 'UID atau username tidak ditemukan.'
                    else:
                        firestore.client().collection('users').document(uid).set({'role': role}, merge=True)
                        msg = f'Role pengguna {uid} diubah ke {role}.'
                        last = {'uid': uid, 'username': username, 'role': role}
            except Exception:
                err = 'Gagal mengubah role.'
        return render_template('admin_roles.html', message=msg, error=err, last=last)

    @app.post("/admin/delete/<post_id>")
    def admin_delete(post_id):
        guard = require_admin()
        if guard:
            return guard
        store.set_status(post_id, "Deleted")
        flash("Post dihapus (soft delete).", "info")
        return redirect(url_for("admin"))

    @app.post("/admin/restore/<post_id>")
    def admin_restore(post_id):
        guard = require_admin()
        if guard:
            return guard
        store.set_status(post_id, "Approved")
        flash("Post dipulihkan.", "success")
        return redirect(url_for("admin"))

    @app.route("/login", methods=["GET", "POST"])
    def login():
        error = None
        if request.method == "POST":
            username = request.form.get("username", "").strip()
            password = request.form.get("password", "").strip()
            admin_user = os.environ.get("ADMIN_USERNAME", "admin")
            admin_pass = os.environ.get("ADMIN_PASSWORD", "menfess.unbin25")
            if username == admin_user and password == admin_pass:
                session["is_admin"] = True
                nxt = request.args.get("next")
                return redirect(nxt or url_for("admin"))
            else:
                error = "Username atau password salah."
        return render_template("login.html", error=error)

    @app.get("/logout")
    def logout():
        session.pop("is_admin", None)
        flash("Anda telah logout.", "info")
        return redirect(url_for("index"))

    return app


app = create_app()

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=True)

