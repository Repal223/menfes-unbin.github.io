// Initialize Firebase client if config provided
;(function(){
  try{
    if (window.FIREBASE_CONFIG && window.firebase) {
      if (!window._firebaseApp) {
        window._firebaseApp = firebase.initializeApp(window.FIREBASE_CONFIG)
        window._db = firebase.firestore()
        try{
          const useEmu = (location.hostname === 'localhost') || window.USE_FIRESTORE_EMULATOR
          if(useEmu && window._db && window._db.useEmulator){
            window._db.useEmulator('127.0.0.1', 8080)
            console.log('Firestore emulator enabled')
          }
        }catch(e){ console.warn('Emulator set failed', e) }
      }
      // Optional Anonymous Auth for secure per-user features
      try{
        if (firebase.auth) {
          window._auth = firebase.auth()
          window._auth.onAuthStateChanged(function(user){
            if(!user){
              window._auth.signInAnonymously().catch(()=>{})
            } else {
              window._authUid = user.uid
              // notify listeners that auth is ready
              try{ window.dispatchEvent(new CustomEvent('mf:auth-ready', { detail: { uid: user.uid } })) }catch{}
            }
          })
        }
      }catch(e){ console.warn('Auth init skipped:', e) }
    }
  }catch(e){
    console.warn('Firebase init skipped:', e)
  }
})();

export const db = window._db || null
export const hasFirebase = !!db
export function currentUID(){
  try{
    if (window._authUid) return window._authUid
    const k = 'mf_uid'
    let uid = localStorage.getItem(k)
    if(!uid){
      uid = 'u_' + Math.random().toString(36).slice(2) + Date.now().toString(36)
      localStorage.setItem(k, uid)
    }
    return uid
  }catch{
    return 'u_guest'
  }
}
