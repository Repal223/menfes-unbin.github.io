#!/usr/bin/env bash
set -euo pipefail

echo "==> Netlify build: prepare public/static"
mkdir -p public/static
cp -r static/* public/static/

# Generate firebase-config.js from env if provided
CFG_PATH="public/firebase-config.js"
if [[ -n "${FIREBASE_API_KEY:-}" && -n "${FIREBASE_PROJECT_ID:-}" && -n "${FIREBASE_APP_ID:-}" ]]; then
  echo "==> Writing Firebase config from Netlify env to ${CFG_PATH}"
  cat >"${CFG_PATH}" <<EOF
// Generated at build time by Netlify
window.FIREBASE_CONFIG = {
  apiKey: "${FIREBASE_API_KEY}",
  authDomain: "${FIREBASE_PROJECT_ID}.firebaseapp.com",
  projectId: "${FIREBASE_PROJECT_ID}",
  storageBucket: "${FIREBASE_PROJECT_ID}.appspot.com",
  messagingSenderId: "${FIREBASE_MESSAGING_SENDER_ID:-}",
  appId: "${FIREBASE_APP_ID}"
};
window.FIREBASE_VAPID_KEY = ${FIREBASE_VAPID_KEY:+"${FIREBASE_VAPID_KEY}"};
window.MF_LOGO_URL = "/static/images/logo-menfes.jpeg";
EOF
else
  echo "==> Skipping Firebase config generation (env vars not set). Using repository file if present."
fi

echo "==> Build finished"
