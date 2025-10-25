# Menfes UNBIN

## Deploy ke Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Inisialisasi: `firebase init` (pilih Hosting → Use existing project → menfes-unbin)
4. Pastikan `firebase.json` dan `.firebaserc` sudah ada di root.
5. Deploy: `firebase deploy`

Website: https://menfes-unbin.web.app

Catatan:
- Folder `templates` berisi file HTML utama.
- Folder `static` berisi css, js, dan images.
- Untuk fitur realtime (notifikasi dan live update), isi `static/js/firebase-config.js` dengan konfigurasi Firebase Web Anda:
  
  ```html
  <script>
    window.FIREBASE_CONFIG = { apiKey: "...", authDomain: "...", projectId: "...", appId:"..." }
  </script>
  ```
  
  Atau edit langsung file `static/js/firebase-config.js`.
  
  Alternatif saat deploy: set env var `FIREBASE_WEB_CONFIG_JSON` sebelum `./scripts/deploy.ps1` agar file tersebut ditulis otomatis.
  Contoh PowerShell:
  
  ```powershell
  $env:FIREBASE_WEB_CONFIG_JSON='{"apiKey":"...","authDomain":"menfes-unbin.firebaseapp.com","projectId":"menfes-unbin","storageBucket":"menfes-unbin.appspot.com","messagingSenderId":"...","appId":"..."}'
  ./scripts/deploy.ps1
  ```
  
  Pastikan Anonymous Auth diaktifkan bila ingin notifikasi klien berdasarkan UID: Firebase Console → Authentication → Sign-in method → Anonymous → Enable.
- Waktu ditampilkan dalam WIB (Asia/Jakarta) baik di server maupun klien.
- Field kirim menfess: Nama Anonim (opsional), To (wajib), Mood (wajib), Isi Pesan (wajib).
- Like dapat ditoggle (seperti Instagram): satu love per pengguna; klik lagi untuk batal.
- Untuk keamanan, atur Firestore Rules agar user hanya bisa membaca dokumen `notifications` dengan `receiver_uid` miliknya.

## Quick Online (Tanpa Akun) dengan Cloudflare Quick Tunnel

- Tujuan: langsung dapat URL publik untuk server lokal (cocok demo/preview).
- Syarat: `cloudflared.exe` sudah ada di root repo (sudah disertakan), Python & deps sudah terpasang.

Langkah (PowerShell):
- Jalankan: `./scripts/serve_and_tunnel.ps1`
- Script akan:
  - Menjalankan app Flask di `http://127.0.0.1:5000`
  - Membuka Quick Tunnel dan menampilkan `PUBLIC URL: https://<acak>.trycloudflare.com`

Catatan:
- Mode ini tidak butuh akun Cloudflare. Data tersimpan in-memory kecuali Anda set kredensial Firebase Admin dan `static/js/firebase-config.js` ke konfigurasi produksi.

## Deploy Produksi via GitHub Actions (Cloud Run + Firebase Hosting)

Siapkan Secrets di GitHub repository:
- `GCP_PROJECT_ID`
- `GCP_SA_KEY` (JSON Service Account untuk Cloud Run dan registry)
- `FIREBASE_TOKEN` atau gunakan `FIREBASE_SERVICE_ACCOUNT_MENFES_UNBIN`
- Opsional `FIREBASE_WEB_CONFIG_JSON` agar workflow menulis `static/js/firebase-config.js`

Setelah itu, push ke `main`/`master` akan memicu workflow di `.github/workflows/*.yml` untuk build dan deploy otomatis.

### Secrets yang Perlu Diisi (GitHub Repository)

- GCP_PROJECT_ID: ID project GCP
- GCP_SA_KEY: Service Account JSON (roles minimal: Cloud Run Admin, Service Account User, Artifact Registry Writer; untuk Hosting gunakan Firebase Hosting Admin atau pakai `FIREBASE_TOKEN`)
- FIREBASE_TOKEN: Token CI `firebase login:ci` (opsional jika pakai service account untuk action hosting)
- FIREBASE_SERVICE_ACCOUNT_MENFES_UNBIN: Service account JSON untuk action hosting (opsional alternatif `FIREBASE_TOKEN`)
- FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID: Config Web Firebase
- SECRET_KEY: Flask secret
- ADMIN_USERNAME, ADMIN_PASSWORD: kredensial admin panel sederhana

Tips: Anda bisa pakai `scripts/gh_set_secrets.ps1` untuk mengisi secrets via `gh` CLI.

### Konfigurasi Firebase

- Firestore Rules dan Indexes akan dideploy dari `firestore_rules.txt` dan `firestore.indexes.json` via workflow.
- Anonymous Auth diaktifkan otomatis oleh workflow (`identitytoolkit` PATCH). Jika butuh, Anda bisa jalankan `scripts/enable_anonymous_auth.ps1 -ProjectId <id>` secara manual.

### Konfigurasi App (Lokal)

- Salin `.env.example` menjadi `.env` lalu isi nilai Firebase dan secret. Aplikasi otomatis meload `.env` saat start.
