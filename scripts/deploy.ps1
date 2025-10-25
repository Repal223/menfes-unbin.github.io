# Usage (PowerShell):
#   $env:PROJECT_ID="menfes-unbin"; $env:REGION="asia-southeast2"; $env:SERVICE_NAME="menfes-unbin-api"; $env:FIREBASE_PROJECT="menfes-unbin"; ./scripts/deploy.ps1

param()

$ErrorActionPreference = 'Stop'

function Require-Cmd($name){
  if (-not (Get-Command $name -ErrorAction SilentlyContinue)){
    throw "Command '$name' not found. Please install it first."
  }
}

Require-Cmd gcloud
Require-Cmd docker
Require-Cmd firebase

$PROJECT_ID = $env:PROJECT_ID
$REGION = $env:REGION
$SERVICE_NAME = $env:SERVICE_NAME
$FIREBASE_PROJECT = $env:FIREBASE_PROJECT
$FIREBASE_WEB_CONFIG_JSON = $env:FIREBASE_WEB_CONFIG_JSON

if (-not $PROJECT_ID) { throw 'PROJECT_ID env var is required' }
if (-not $REGION) { $REGION = 'asia-southeast2' }
if (-not $SERVICE_NAME) { $SERVICE_NAME = 'menfes-unbin-api' }
if (-not $FIREBASE_PROJECT) { $FIREBASE_PROJECT = $PROJECT_ID }

if ($FIREBASE_WEB_CONFIG_JSON) {
  Write-Host "==> Writing Firebase Web config to static/js/firebase-config.js" -ForegroundColor Cyan
  $cfgPath = Join-Path $PSScriptRoot "..\static\js\firebase-config.js"
  $content = @()
  $content += "// Auto-written during deploy"
  $content += ("window.FIREBASE_CONFIG = " + $FIREBASE_WEB_CONFIG_JSON + ";")
  $content += "window.USE_FIRESTORE_EMULATOR = false;"
  $content | Set-Content -Path $cfgPath -Encoding UTF8
} else {
  # If individual FIREBASE_* envs are missing, fetch from Firebase CLI automatically
  $needFetch = -not ($env:FIREBASE_API_KEY) -or -not ($env:FIREBASE_APP_ID)
  if ($needFetch) {
    Write-Host "==> Fetching Firebase Web config via CLI" -ForegroundColor Cyan
    & (Join-Path $PSScriptRoot 'prepare_firebase_env.ps1') -FirebaseProject $FIREBASE_PROJECT
  }
}

Write-Host "==> Enabling required services" -ForegroundColor Cyan
gcloud services enable run.googleapis.com artifactregistry.googleapis.com --project $PROJECT_ID

Write-Host "==> Auth gcloud (will open browser if not already authenticated)" -ForegroundColor Cyan
gcloud auth login
gcloud config set project $PROJECT_ID

Write-Host "==> Configuring Docker auth" -ForegroundColor Cyan
gcloud auth configure-docker --quiet

$IMAGE = "gcr.io/$PROJECT_ID/menfes-unbin:latest"

Write-Host "==> Building Docker image $IMAGE" -ForegroundColor Cyan
docker build -t $IMAGE .
docker push $IMAGE

Write-Host "==> Deploying Cloud Run $SERVICE_NAME in $REGION" -ForegroundColor Cyan

$envPairs = @()
foreach($k in @('FIREBASE_API_KEY','FIREBASE_AUTH_DOMAIN','FIREBASE_PROJECT_ID','FIREBASE_STORAGE_BUCKET','FIREBASE_MESSAGING_SENDER_ID','FIREBASE_APP_ID','SECRET_KEY','ADMIN_USERNAME','ADMIN_PASSWORD')){
  $v = (Get-Item -Path env:$k -ErrorAction SilentlyContinue).Value
  if($v){ $envPairs += "$k=$v" }
}
$setEnv = ''
if($envPairs.Count -gt 0){ $setEnv = "--set-env-vars " + ($envPairs -join ',') }

gcloud run deploy $SERVICE_NAME `
  --image $IMAGE `
  --region $REGION `
  --allow-unauthenticated `
  --platform managed `
  $setEnv `
  --project $PROJECT_ID

Write-Host "==> Firebase login (will open browser)" -ForegroundColor Cyan
firebase login

Write-Host "==> Target Firebase project" -ForegroundColor Cyan
firebase use $FIREBASE_PROJECT

Write-Host "==> Deploy Firebase Hosting" -ForegroundColor Cyan
firebase deploy --only hosting

Write-Host "==> Done. Site should be live. Open: https://$FIREBASE_PROJECT.web.app" -ForegroundColor Green
