// Konfigurasi Firebase Web untuk GitHub Pages.
// Jika Anda menggunakan GitHub Secrets (workflow gh-pages), file ini akan ditimpa otomatis saat deploy.
// Jika tidak, isi nilai di bawah ini secara manual lalu commit.

window.FIREBASE_CONFIG = window.FIREBASE_CONFIG || {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "menfes-unbin.firebaseapp.com",
  projectId: "menfes-unbin",
  storageBucket: "menfes-unbin.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_FIREBASE_APP_ID"
};

// Opsional: VAPID key untuk Web Push
window.FIREBASE_VAPID_KEY = window.FIREBASE_VAPID_KEY || "YOUR_VAPID_KEY";
// Logo Menfes untuk notifikasi
window.MF_LOGO_URL = window.MF_LOGO_URL || "static/images/logo-menfes.jpeg";
