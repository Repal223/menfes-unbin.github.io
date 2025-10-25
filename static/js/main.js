import { db, hasFirebase, currentUID } from './firebase.js'

// Theme persistence + animated icon
const THEME_KEY = 'mf_theme'
function applyTheme(){
  const pref = localStorage.getItem(THEME_KEY) || 'light'
  document.body.classList.toggle('dark', pref === 'dark')
  renderThemeIcon()
}
function toggleTheme(){
  const isDark = document.body.classList.toggle('dark')
  localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light')
  renderThemeIcon(true)
}
function renderThemeIcon(bounce=false){
  const tgl = document.getElementById('themeToggle')
  if(!tgl) return
  const dark = document.body.classList.contains('dark')
  tgl.innerHTML = dark
    ? '<span class="ico night" aria-label="Night">★</span>'
    : '<span class="ico day" aria-label="Day">☀</span>'
  if(bounce){ tgl.classList.remove('pulse'); void tgl.offsetWidth; tgl.classList.add('pulse') }
}

// Simple 3D tilt
function enableTilt(selector){
  const els = Array.from(document.querySelectorAll(selector))
  els.forEach(el=>{
    el.addEventListener('mousemove', (e)=>{
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width/2
      const cy = r.top + r.height/2
      const dx = (e.clientX - cx)/r.width
      const dy = (e.clientY - cy)/r.height
      el.style.transform = `perspective(1000px) rotateY(${dx*10}deg) rotateX(${dy*-10}deg) translateZ(2px)`
    })
    el.addEventListener('mouseleave', ()=>{ el.style.transform = '' })
  })
}

// WIB time helper for any element with [data-wib]
function formatWIBAll(){
  document.querySelectorAll('[data-wib]').forEach(el=>{
    const iso = el.getAttribute('data-wib')
    if(!iso) return
    const d = new Date(iso)
    const s = d.toLocaleString('id-ID', { hour12:false, timeZone: 'Asia/Jakarta' }) + ' WIB'
    el.textContent = s
  })
}

// Notification Center with queue (max 3)
const Notif = (()=>{
  let wrap
  const queue = []
  const active = new Set()
  const MAX = 3
  function ensure(){
    if(!wrap){
      wrap = document.createElement('div')
      wrap.className = 'toast-wrap'
      document.body.appendChild(wrap)
    }
    return wrap
  }
  function logo(){
    try{
      if(window.MF_LOGO_URL) return window.MF_LOGO_URL
      return '/static/images/logo-menfes.jpeg'
    }catch{ return '/static/images/logo-menfes.jpeg' }
  }
  function iconFor(type){
    switch(type){
      case 'like': return '❤️'
      case 'comment': return '💬'
      case 'reply': return '↩️'
      case 'share': return '🔗'
      case 'edit': return '✏️'
      case 'delete': return '🗑️'
      default: return '🔔'
    }
  }
  function next(){
    if(active.size >= MAX) return
    const item = queue.shift()
    if(!item) return
    const box = document.createElement('div')
    box.className = `toast ${item.type||'info'}`
    const img = `<img class=\"toast-logo\" src=\"${logo()}\" alt=\"Menfes UNBIN\">`
    box.innerHTML = `${img}<span class=\"ico\">${item.accent || iconFor(item.type)}</span><span>${item.message||''}</span>`
    ensure().appendChild(box)
    active.add(box)
    requestAnimationFrame(()=> box.classList.add('in'))
    setTimeout(()=>{
      box.classList.remove('in')
      setTimeout(()=>{ active.delete(box); box.remove(); next() }, 500)
    }, 5000)
  }
  function show({type='info', message='', accent=''}){
    queue.push({type, message, accent})
    next()
  }
  return { show }
})()

// Ensure uid and attach to forms
function ensureUIDHiddenInputs(){
  const uid = currentUID()
  document.querySelectorAll('form').forEach(f=>{
    if (!f.querySelector('input[name="uid"]')){
      const h = document.createElement('input')
      h.type = 'hidden'; h.name = 'uid'; h.value = uid
      f.appendChild(h)
    }
  })
}

// Firestore listeners
let _notifUnsub = null
let _notifForUID = null
function listenNotifications(){
  if(!hasFirebase || !db) return
  const uid = currentUID()
  if (_notifForUID === uid) return
  _notifForUID = uid
  if (typeof _notifUnsub === 'function') { try{ _notifUnsub(); }catch{} }
  try{
    _notifUnsub = db.collection('notifications')
      .where('receiver_uid','==',uid)
      .where('read','==',false)
      .orderBy('created_at','desc')
      .limit(20)
      .onSnapshot((snap)=>{
        snap.docChanges().forEach(async (ch)=>{
          if(ch.type === 'added'){
            const n = ch.doc.data()||{}
            const msg = n.message||'Notifikasi baru'
            const admin = !!(n.actor_is_admin || n.by_admin)
            const type = admin ? 'admin' : (n.type||'info')
            const prefix = admin ? '🛡️ Admin: ' : ''
            Notif.show({ type, message: prefix + msg })
            try{ if('Notification' in window && Notification.permission==='granted'){ new Notification('Menfes', { body: msg }) } }catch{}
            try{ await db.collection('notifications').doc(ch.doc.id).set({read:true}, {merge:true}) }catch(e){}
          }
        })
      })
  }catch(e){ console.warn('Notif listener disabled:', e) }
}

document.addEventListener('DOMContentLoaded', ()=>{
  applyTheme()
  const tgl = document.getElementById('themeToggle')
  if(tgl){ tgl.addEventListener('click', toggleTheme) }

  enableTilt('.post-card, .btn, .btn-icon, .fab')
  formatWIBAll()
  ensureUIDHiddenInputs()
  listenNotifications()
  rememberNameFromForms()
  setupDraft()
  fallbackSSE()
  // reveal owner-only controls
  try{
    const ownerEl = document.querySelector('[data-owner]')
    if(ownerEl){
      const owner = ownerEl.getAttribute('data-owner')
      if(owner && owner === currentUID()){
        document.querySelectorAll('.owner-only').forEach(el=> el.style.display = '')
      }
    }
  }catch{}
})

document.addEventListener('click', async (e)=>{
  const likeBtn = e.target.closest('.btn-like')
  if(likeBtn){
    const id = likeBtn.getAttribute('data-id')
    try{
      const res = await fetch(`/like_post/${id}`, {method:'POST', headers:{'X-UID': currentUID()}})
      const data = await res.json()
      if(data.ok){
        const span = likeBtn.querySelector('.like-count')
        if(span) span.textContent = data.likes
        if(data.liked){ likeBtn.classList.add('liked') } else { likeBtn.classList.remove('liked') }
      }
    }catch(err){console.error(err)}
  }
  const shareBtn = e.target.closest('.btn-icon.share')
  if(shareBtn){
    const link = shareBtn.getAttribute('data-link')
    const id = shareBtn.getAttribute('data-id')
    if(navigator.clipboard){
      try{await navigator.clipboard.writeText(link); Notif.show({type:'share', message:'Link disalin ke papan klip'})}
      catch(e){alert(link)}
    }else{prompt('Salin link:', link)}
    // ping server to count share + notify owner
    if(id){
      try{
        await fetch(`/share_post/${id}`, { method:'POST', headers:{ 'X-UID': currentUID(), 'X-Name': getDisplayName() } })
      }catch(err){ console.warn('share_post failed', err) }
    }
  }
})

// simple name memory
function getDisplayName(){
  try{ return localStorage.getItem('mf_name') || 'Anon' }catch{ return 'Anon' }
}
function rememberNameFromForms(){
  const nameInput = document.querySelector('form[action$="/add"] input[name="name"], #name')
  if(nameInput){ nameInput.addEventListener('change', ()=>{ try{ localStorage.setItem('mf_name', nameInput.value.trim() || 'Anon') }catch{} }) }
  const commenter = document.getElementById('commenter_name')
  if(commenter){ commenter.addEventListener('change', ()=>{ try{ localStorage.setItem('mf_name', commenter.value.trim() || 'Anon') }catch{} }) }
}

// Draft save for add form
function setupDraft(){
  const form = document.querySelector('form[action$="/add"]')
  if(!form) return
  const name = form.querySelector('#name')
  const to = form.querySelector('#to')
  const mood = form.querySelector('#mood')
  const content = form.querySelector('#content')
  const key = 'mf_draft'
  // load existing draft
  try{
    const raw = localStorage.getItem(key)
    if(raw){
      const d = JSON.parse(raw)
      if(name && d.name) name.value = d.name
      if(to && d.to) to.value = d.to
      if(mood && d.mood) mood.value = d.mood
      if(content && d.content) content.value = d.content
    }
  }catch{}
  const btnSave = document.getElementById('saveDraft')
  const btnClear = document.getElementById('clearDraft')
  if(btnSave){ btnSave.addEventListener('click', ()=>{
    try{
      const d = { name: name?.value||'', to: to?.value||'', mood: mood?.value||'', content: content?.value||'' }
      localStorage.setItem(key, JSON.stringify(d))
      Notif.show({type:'info', message:'Draft tersimpan'})
    }catch{}
  })}
  if(btnClear){ btnClear.addEventListener('click', ()=>{
    try{ localStorage.removeItem(key); if(name) name.value=''; if(to) to.value=''; if(content) content.value=''; if(mood) mood.value=''; Notif.show({type:'info', message:'Draft dihapus'}) }catch{}
  })}
}

// Realtime updates for posts and comments
function listenPostsRealtime(){
  if(!hasFirebase || !db) return
  const articles = Array.from(document.querySelectorAll('article.post-card[id^="post-"]'))
  articles.forEach(el=>{
    const pid = el.id.replace('post-','')
    try{
      db.collection('posts').doc(pid).onSnapshot((doc)=>{
        const d = doc.data()||{}
        const likeSpan = el.querySelector('.like-count')
        if(likeSpan && typeof d.likes === 'number') likeSpan.textContent = d.likes
        const moodEl = el.querySelector('.post-mood')
        if(moodEl && d.mood) moodEl.textContent = d.mood
        const contentEl = el.querySelector('.post-content')
        if(contentEl && d.content) contentEl.textContent = d.content
        if(d.status === 'Deleted') el.style.display = 'none'
      })
    }catch(e){}
  })
}

function listenCommentsRealtime(){
  if(!hasFirebase || !db) return
  const m = location.pathname.match(/\/post\/([a-f0-9]+)/)
  if(!m) return
  const pid = m[1]
  const list = document.querySelector('.comment-list')
  if(!list) return
  const seen = new Set(Array.from(list.querySelectorAll('li.comment-item')).map(li=>li.dataset.id))
  try{
    db.collection('posts').doc(pid).collection('comments').orderBy('created_at','asc').onSnapshot((snap)=>{
      snap.docChanges().forEach(ch=>{
        const id = ch.doc.id
        const d = ch.doc.data()||{}
        if(ch.type==='added' && !seen.has(id)){
          const li = document.createElement('li')
          li.className = 'comment-item' + (d.by_admin ? ' comment-admin':'')
          li.dataset.id = id
          const date = d.created_at && d.created_at.toDate ? d.created_at.toDate() : new Date()
          const when = date.toLocaleString('id-ID', {hour12:false, timeZone:'Asia/Jakarta'}) + ' WIB'
          li.innerHTML = `<div class=\"comment-text\"></div><div class=\"comment-meta\">${d.by_admin?'<span class=\"badge-admin\">Admin</span> · ':''}<span>${date.toLocaleString('id-ID',{hour12:false})} WIB</span></div>`
          li.querySelector('.comment-text').textContent = d.text || ''
          list.appendChild(li)\n          try{ if(d.author_uid){ li.setAttribute('data-author-uid', d.author_uid) } }catch{}\n          try{ if(window.highlightMentions){ highlightMentions(li.querySelector('.comment-text')) } }catch{}\n          try{ if(window.applyBEMBadge){ applyBEMBadge(li) } }catch{}
          try{ const spans = li.querySelectorAll('.comment-meta span'); if(spans && spans.length){ spans[spans.length-1].textContent = when } }catch{}
          seen.add(id)
        }
        if(ch.type==='removed'){
          const li = list.querySelector(`li[data-id="${id}"]`)
          if(li) li.remove()
          seen.delete(id)
        }
        if(ch.type==='modified'){
          const li = list.querySelector(`li[data-id="${id}"]`)
          if(li){ li.querySelector('.comment-text').textContent = d.text || '' }
        }
      })
    })
  }catch(e){}
}

// Typing indicator (local simulation)
function setupTypingIndicator(){
  const ta = document.getElementById('comment')
  if(!ta) return
  let hint = document.querySelector('.typing-hint')
  if(!hint){
    hint = document.createElement('div')
    hint.className = 'typing-hint'
    hint.textContent = 'mengetik…'
    ta.closest('form').appendChild(hint)
  }
  let t
  const show = ()=>{ hint.style.opacity = '1' }
  const hide = ()=>{ hint.style.opacity = '0' }
  ta.addEventListener('input', ()=>{ show(); clearTimeout(t); t = setTimeout(hide, 1000) })
}

// Page transitions
function setupPageTransitions(){
  document.body.classList.add('fade-in')
  document.addEventListener('click', (e)=>{
    const a = e.target.closest('a[href]')
    if(!a || a.target==='_blank' || a.getAttribute('href').startsWith('#')) return
    if(a.origin !== location.origin) return
    e.preventDefault()
    document.body.classList.add('fade-out')
    setTimeout(()=>{ location.href = a.href }, 180)
  })
}

// init extra realtime + FX
document.addEventListener('DOMContentLoaded', ()=>{
  listenPostsRealtime()
  listenCommentsRealtime()
  setupTypingIndicator()
  setupPageTransitions()
  setupReveal()
  startParticles()
})

// Re-attach notifications when auth becomes ready (UID changes)
try{ window.addEventListener('mf:auth-ready', ()=>{ listenNotifications() }, { once: false }) }catch{}

// Ask for system notification permission politely
try{
  if ('Notification' in window){
    if (Notification.permission === 'default'){
      setTimeout(()=>{ try{ Notification.requestPermission() }catch{} }, 1200)
    }
  }
}catch{}

// Scroll reveal
function setupReveal(){
  const els = document.querySelectorAll('.post-card, .stat, .form, .table-wrap')
  els.forEach(el=> el.classList.add('reveal'))
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){ e.target.classList.add('reveal-in'); io.unobserve(e.target) }
    })
  }, {threshold:.15})
  els.forEach(el=> io.observe(el))
}

// Optional particles (very light)
function startParticles(){
  try{
    if(matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const canvas = document.createElement('canvas')
    canvas.className = 'bg-particles'
    Object.assign(canvas.style,{position:'fixed',inset:'0',zIndex:'-2',pointerEvents:'none'})
    document.body.appendChild(canvas)
    const ctx = canvas.getContext('2d')
    const DPR = Math.min(devicePixelRatio||1, 2)
    let w=0,h=0
    const parts = Array.from({length: 20}).map(()=>({ x: Math.random(), y: Math.random(), r: .6+Math.random()*1.4, vx:(Math.random()-.5)*.0006, vy:(Math.random()-.5)*.0006 }))
    function resize(){ w=canvas.width=innerWidth*DPR; h=canvas.height=innerHeight*DPR }
    function step(){
      ctx.clearRect(0,0,w,h)
      ctx.fillStyle = 'rgba(255,213,128,.65)'
      parts.forEach(p=>{
        p.x += p.vx; p.y += p.vy
        if(p.x<0||p.x>1) p.vx*=-1
        if(p.y<0||p.y>1) p.vy*=-1
        ctx.beginPath(); ctx.arc(p.x*w, p.y*h, p.r*DPR, 0, Math.PI*2); ctx.fill()
      })
      requestAnimationFrame(step)
    }
    addEventListener('resize', resize, {passive:true}); resize(); step()
  }catch{}
}

// Fallback realtime via SSE when Firebase client not available
function fallbackSSE(){
  if(hasFirebase && db) return
  try{
    const es = new EventSource('/stream')
    es.addEventListener('like', (e)=>{
      try{
        const d = JSON.parse(e.data||'{}')
        if(!d.post_id) return
        const el = document.getElementById('post-'+d.post_id)
        if(!el) return
        const span = el.querySelector('.like-count')
        if(span && typeof d.likes === 'number'){ span.textContent = d.likes }
      }catch{}
    })
    es.addEventListener('comment', (e)=>{
      Notif.show({type:'comment', message:'Komentar baru masuk'})
    })
    es.addEventListener('post', (e)=>{
      Notif.show({type:'info', message:'Menfess baru terkirim'})
    })
  }catch(e){ console.warn('SSE disabled', e) }
}

// Add author UID on live-added comments and enhance UI
document.addEventListener('DOMContentLoaded', ()=>{
  try{
    // Attach enhancements when live comments are appended (from the listener within this file)
    // We look for list.appendChild(li)\n          try{ if(d.author_uid){ li.setAttribute('data-author-uid', d.author_uid) } }catch{}\n          try{ if(window.highlightMentions){ highlightMentions(li.querySelector('.comment-text')) } }catch{}\n          try{ if(window.applyBEMBadge){ applyBEMBadge(li) } }catch{} by observing DOM changes; see MutationObserver below
  }catch{}
})

// --- Extra Enhancements: Mentions + Roles ---
function highlightMentions(container){
  if(!container) return
  const mentionRegex = /@([A-Za-z0-9_#]+)/g
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT, null)
  const nodes = []
  while(walker.nextNode()) nodes.push(walker.currentNode)
  nodes.forEach(node=>{
    const t = node.nodeValue
    if(!t || !mentionRegex.test(t)) return
    const span = document.createElement('span')
    const parts = t.split(mentionRegex)
    for(let i=0;i<parts.length;i++){
      if(i%2===0){ span.appendChild(document.createTextNode(parts[i])) }
      else{ const m = document.createElement('span'); m.className='mention'; m.textContent='@'+parts[i]; span.appendChild(m) }
    }
    node.parentNode.replaceChild(span, node)
  })
}

let _bemUIDs = null
async function loadRolesAndApply(){
  try{
    if(!hasFirebase || !db) return
    // Prefer roles collection (public readable); fallback to users if available
    let ids = []
    try{
      const rs = await db.collection('roles').where('bem','==', true).get()
      ids = rs.docs.map(d=> (d.data()||{}).uid || d.id)
    }catch(e){ ids = [] }
    if(!ids.length){
      try{
        const qs = await db.collection('users').where('role','==','admin').get()
        ids = qs.docs.map(d=> d.id)
      }catch(e){ ids = [] }
    }
    _bemUIDs = new Set(ids)
    document.querySelectorAll('article.post-card, li.comment-item').forEach(el=> applyBEMBadge(el))
  }catch(e){}
}
function applyBEMBadge(el){
  try{
    if(!_bemUIDs || !_bemUIDs.size) return
    const uid = el.getAttribute('data-author-uid')
    if(!uid || !_bemUIDs.has(uid)) return
    if(el.matches('article.post-card')){
      const header = el.querySelector('header .post-author')
      if(header && !header.querySelector('.badge-bem')){
        const b = document.createElement('span'); b.className='badge'; b.textContent='BEM UNBIN'
        header.appendChild(document.createTextNode(' '))
        header.appendChild(b)
      }
    } else if(el.matches('li.comment-item')){
      const meta = el.querySelector('.comment-meta')
      if(meta && !meta.querySelector('.badge-bem')){
        const b = document.createElement('span'); b.className='badge'; b.textContent='BEM UNBIN'
        meta.insertBefore(b, meta.firstChild)
        meta.insertBefore(document.createTextNode(' '), meta.childNodes[1]||null)
      }
    }
  }catch{}
}

document.addEventListener('DOMContentLoaded', ()=>{
  try{
    document.querySelectorAll('.post-content, .comment-text').forEach(el=> highlightMentions(el))
    loadRolesAndApply()
    // Observe new comments/posts appended to the DOM to re-apply highlight/badges
    const root = document.body
    const mo = new MutationObserver((list)=>{
      for(const m of list){
        m.addedNodes && m.addedNodes.forEach(n=>{
          if(!(n instanceof HTMLElement)) return
          if(n.matches && n.matches('.comment-item, article.post-card')){
            try{ const ct = n.querySelector('.comment-text'); if(ct) highlightMentions(ct) }catch{}
            try{ applyBEMBadge(n) }catch{}
          }
        })
      }
    })
    mo.observe(root, { childList:true, subtree:true })
  }catch{}
})

// --- Visual polish overrides: emoji icons & theme toggle ---
// Re-define renderThemeIcon with emoji for a more playful/futuristic vibe
function renderThemeIcon(bounce=false){
  const tgl = document.getElementById('themeToggle')
  if(!tgl) return
  const dark = document.body.classList.contains('dark')
  tgl.innerHTML = dark
    ? '<span class="ico night" aria-label="Night">🌙</span>'
    : '<span class="ico day" aria-label="Day">🌞</span>'
  if(bounce){ tgl.classList.remove('pulse'); void tgl.offsetWidth; tgl.classList.add('pulse') }
}

// Add emoji accent automatically for Notif.show if not provided
try{
  const _map = (type)=>({ like:'❤️', comment:'💬', reply:'↩️', share:'🔗', edit:'✏️', delete:'🗑️' }[type]||'🔔')
  const _origShow = Notif && Notif.show
  if(typeof _origShow === 'function'){
    Notif.show = (opts={})=>{ if(!opts.accent){ opts.accent=_map(opts.type) } _origShow(opts) }
  }
}catch{}

// Normalize any generic toasts created elsewhere (e.g., FCM) to use emoji bell
try{
  const moGeneric = new MutationObserver((list)=>{
    for(const m of list){
      if(!m.addedNodes) continue
      m.addedNodes.forEach(node=>{
        if(!(node instanceof HTMLElement)) return
        const el = node.matches?.('.toast .ico') ? node : node.querySelector?.('.toast .ico')
        if(el && (el.textContent==='?' || el.textContent==='??')){ el.textContent = '🔔' }
      })
    }
  })
  moGeneric.observe(document.body, { childList:true, subtree:true })
}catch{}
