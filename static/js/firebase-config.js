// Dev default: use emulator locally. Replace with real config for production.
window.FIREBASE_CONFIG = window.FIREBASE_CONFIG || { projectId: 'menfes-unbin-emulator' }
window.USE_FIRESTORE_EMULATOR = (location.hostname === 'localhost')
