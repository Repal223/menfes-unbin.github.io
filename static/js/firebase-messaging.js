;(function(){
  try{
    if(!window.firebase || !window._firebaseApp) return
    if(!('Notification' in window)) return
    const messaging = firebase.messaging()
    if(!messaging) return
    // Register service worker at site root so SW scope is "/"
    navigator.serviceWorker.register('/firebase-messaging-sw.js').then((reg)=>{
      try{ messaging.useServiceWorker(reg) }catch{}
    }).catch(()=>{})

    const TOKEN_KEY = 'mf_fcm_token'
    function setUI(state){
      try{
        const btn = document.getElementById('notifToggle')
        if(!btn) return
        btn.textContent = state === 'on' ? 'Notif: On' : 'Notif: Off'
      }catch{}
    }

    async function saveToken(token){
      try{
        const db = window._db
        if(!db) return
        const uid = window._authUid || (localStorage.getItem('mf_uid')||'guest')
        await db.collection('fcm_tokens').doc(token).set({
          uid: uid,
          token: token,
          updated_at: new Date(),
          user_agent: navigator.userAgent || ''
        }, { merge: true })
        try{ localStorage.setItem(TOKEN_KEY, token) }catch{}
        setUI('on')
      }catch(e){ console.warn('saveToken failed', e) }
    }

    async function ensurePermissionAndToken(){
      try{
        let perm = Notification.permission
        if(perm === 'default'){
          try{ perm = await Notification.requestPermission() }catch{}
        }
        if(perm !== 'granted') return
        const vapidKey = (window.FIREBASE_VAPID_KEY || window.FCM_VAPID_KEY || null)
        const token = await messaging.getToken(vapidKey ? { vapidKey } : undefined)
        if(token){ await saveToken(token) }
      }catch(e){ console.warn('getToken failed', e) }
    }

    // Foreground messages
    try{
      messaging.onMessage((payload)=>{
        try{
          const n = (payload && payload.notification) || {}
          const d = (payload && payload.data) || {}
          const title = n.title || 'Menfes UNBIN'
          const body = n.body || 'Aktivitas baru'
          const isAdmin = (d && (d.admin==='true' || d.admin===true))
          // Inline popup element
          const wrap = document.createElement('div')
          wrap.className = 'toast-wrap'
          const box = document.createElement('div')
          box.className = 'toast '+(isAdmin?'admin':'info')+' in'
          const logo = (window.MF_LOGO_URL || '/static/images/logo-menfes.jpeg')
          const prefix = isAdmin ? '🛡️ Admin: ' : ''
          box.innerHTML = '<img class="toast-logo" alt="Menfes UNBIN" src="'+logo+'"/>'+
                          '<span class="ico">🔔</span><span>'+ (prefix + title+': '+body) +'</span>'
          wrap.appendChild(box)
          document.body.appendChild(wrap)
          setTimeout(()=>{ try{ box.classList.remove('in'); setTimeout(()=>wrap.remove(), 600) }catch{} }, 4000)
          // System notification
          if(Notification.permission==='granted'){
            try{ navigator.serviceWorker.getRegistration().then(reg=>{ reg?.showNotification(title, { body }) }) }catch{}
          }
        }catch{}
      })
    }catch(e){ console.warn('onMessage init failed', e) }

    async function disableNotifications(){
      try{
        const tok = localStorage.getItem(TOKEN_KEY)
        if(tok){
          try{ await messaging.deleteToken(tok) }catch{}
          try{ const db = window._db; if(db) await db.collection('fcm_tokens').doc(tok).delete().catch(()=>null) }catch{}
        }
      }catch{}
      try{ localStorage.removeItem(TOKEN_KEY) }catch{}
      setUI('off')
    }

    function initToggle(){
      try{
        const btn = document.getElementById('notifToggle')
        if(!btn) return
        const tok = localStorage.getItem(TOKEN_KEY)
        setUI(tok ? 'on' : 'off')
        btn.addEventListener('click', async ()=>{
          const tokNow = localStorage.getItem(TOKEN_KEY)
          if(tokNow){ await disableNotifications() }
          else{ await ensurePermissionAndToken() }
        })
      }catch{}
    }

    // Kick off
    initToggle()
    // refresh token when auth ready
    window.addEventListener('mf:auth-ready', ()=>{ ensurePermissionAndToken() })
  }catch(e){ console.warn('Firebase Messaging disabled', e) }
})();
