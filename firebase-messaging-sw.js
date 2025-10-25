/* global importScripts, firebase */
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js')
// Fetch runtime Firebase config relative to SW location (works on GitHub Pages)
try{ importScripts('./firebase-config.js') }catch(e){}

self.addEventListener('install', ()=>{ self.skipWaiting() })
self.addEventListener('activate', (e)=>{ e.waitUntil(self.clients.claim()) })

// Minimal boot: expects FIREBASE_CONFIG to be injected via /firebase-config.js at runtime
try{
  self.FIREBASE_CONFIG = self.FIREBASE_CONFIG || {}
  var valid = !!(self.FIREBASE_CONFIG.apiKey && !/YOUR|CHANGE_ME|\.\.\./i.test(self.FIREBASE_CONFIG.apiKey))
  if(!valid){ throw new Error('FIREBASE_CONFIG not set in SW') }
  firebase.initializeApp(self.FIREBASE_CONFIG)
  const messaging = firebase.messaging()
  messaging.onBackgroundMessage((payload)=>{
    try{
      const n = (payload && payload.notification) || {}
      const title = n.title || 'Menfes UNBIN'
      const body = n.body || 'Aktivitas baru'
      self.registration.showNotification(title, { body })
    }catch(e){}
  })
}catch(e){ /* no-op */ }
