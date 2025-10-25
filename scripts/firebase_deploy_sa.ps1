<#
Deploy Menfes UNBIN using only Firebase + GCP (no GitHub Actions).

What it does:
  - Auth to GCP using a Service Account JSON
  - Enable required APIs
  - Build & push Docker image to gcr.io
  - Deploy Cloud Run (public) with env vars (FIREBASE_* + app)
  - Enable Firebase Anonymous Auth
  - Prepare static/js/firebase-config.js (from FIREBASE_WEB_CONFIG_JSON or via Firebase CLI)
  - Deploy Firebase Hosting (rewrite -> Cloud Run)

Prereqs:
  - gcloud, docker, firebase-tools installed locally
  - A Service Account JSON with required roles
  - For Hosting non-interactive, set $env:FIREBASE_TOKEN (from `firebase login:ci`)

Usage (PowerShell):
  $env:FIREBASE_TOKEN = "<token>"
  # Optional: provide FIREBASE_WEB_CONFIG_JSON to skip CLI fetch
  # $env:FIREBASE_WEB_CONFIG_JSON = '{"apiKey":"...","projectId":"...","appId":"..."}'
  ./scripts/firebase_deploy_sa.ps1 -ProjectId menfes-unbin -SaJsonPath .\sa-key.json
#>

param(
  [Parameter(Mandatory=$true)][string]$ProjectId,
  [string]$Region = 'asia-southeast2',
  [string]$ServiceName = 'menfes-unbin-api',
  [string]$SaJsonPath = '.\\sa-key.json'
)

$ErrorActionPreference = 'Stop'

function Require-Cmd($name){ if (-not (Get-Command $name -ErrorAction SilentlyContinue)) { throw "Missing command: $name" } }
Require-Cmd gcloud
Require-Cmd docker
Require-Cmd firebase

if (-not (Test-Path $SaJsonPath)) { throw "Service Account JSON not found at $SaJsonPath" }

Write-Host "==> Authenticating gcloud with Service Account" -ForegroundColor Cyan
gcloud auth activate-service-account --key-file $SaJsonPath | Out-Host
gcloud config set project $ProjectId | Out-Null

Write-Host "==> Enabling required APIs" -ForegroundColor Cyan
gcloud services enable run.googleapis.com containerregistry.googleapis.com iam.googleapis.com | Out-Host

Write-Host "==> Configuring Docker auth" -ForegroundColor Cyan
gcloud auth configure-docker --quiet | Out-Host

$image = "gcr.io/$ProjectId/menfes-unbin:latest"
Write-Host "==> Building and pushing Docker image: $image" -ForegroundColor Cyan
docker build -t $image .
docker push $image

Write-Host "==> Deploying to Cloud Run: $ServiceName ($Region)" -ForegroundColor Cyan
$envPairs = @()
foreach($k in @('FIREBASE_API_KEY','FIREBASE_AUTH_DOMAIN','FIREBASE_PROJECT_ID','FIREBASE_STORAGE_BUCKET','FIREBASE_MESSAGING_SENDER_ID','FIREBASE_APP_ID','SECRET_KEY','ADMIN_USERNAME','ADMIN_PASSWORD')){
  $v = (Get-Item -Path env:$k -ErrorAction SilentlyContinue).Value
  if($v){ $envPairs += "$k=$v" }
}
$setEnv = ''
if($envPairs.Count -gt 0){ $setEnv = "--set-env-vars " + ($envPairs -join ',') }

gcloud run deploy $ServiceName `
  --image $image `
  --region $Region `
  --allow-unauthenticated `
  --platform managed `
  $setEnv `
  --project $ProjectId | Out-Host

Write-Host "==> Enabling Firebase Anonymous Auth" -ForegroundColor Cyan
$accessToken = (gcloud auth print-access-token).Trim()
if (-not $accessToken) { throw 'Failed to obtain access token via gcloud' }
$uri = "https://identitytoolkit.googleapis.com/admin/v2/projects/$ProjectId/config"
$body = @{ signIn = @{ anonymous = @{ enabled = $true } } } | ConvertTo-Json -Compress
Invoke-RestMethod -Method Patch -Uri $uri -Headers @{ Authorization = "Bearer $accessToken"; 'Content-Type'='application/json' } -Body $body | Out-Null

Write-Host "==> Preparing Firebase Web config (static/js/firebase-config.js)" -ForegroundColor Cyan
$cfgPath = Join-Path $PSScriptRoot "..\static\js\firebase-config.js"
if ($env:FIREBASE_WEB_CONFIG_JSON) {
  $lines = @()
  $lines += "// Auto-written by firebase_deploy_sa.ps1"
  $lines += ("window.FIREBASE_CONFIG = " + $env:FIREBASE_WEB_CONFIG_JSON + ";")
  $lines += "window.USE_FIRESTORE_EMULATOR = false;"
  $lines | Set-Content -Path $cfgPath -Encoding UTF8
} else {
  if (-not $env:FIREBASE_TOKEN) { Write-Host "FIREBASE_TOKEN not set; skipping client config generation." -ForegroundColor Yellow }
  else {
    $env:FIREBASE_PROJECT = $ProjectId
    firebase use $ProjectId | Out-Host
    $apps = firebase apps:list --project $ProjectId --json | ConvertFrom-Json
    $web = $apps.result | Where-Object { $_.platform -eq 'WEB' } | Select-Object -First 1
    if (-not $web) {
      firebase apps:create WEB menfes-web --project $ProjectId | Out-Host
      $apps = firebase apps:list --project $ProjectId --json | ConvertFrom-Json
      $web = $apps.result | Where-Object { $_.platform -eq 'WEB' } | Select-Object -First 1
    }
    $cfgJson = firebase apps:sdkconfig WEB $($web.appId) --project $ProjectId --json | ConvertFrom-Json
    $cfg = $cfgJson.result.sdkConfig
    $lines = @()
    $lines += "// Auto-written by firebase_deploy_sa.ps1"
    $lines += ("window.FIREBASE_CONFIG = " + ($cfg | ConvertTo-Json -Compress) + ";")
    $lines += "window.USE_FIRESTORE_EMULATOR = false;"
    $lines | Set-Content -Path $cfgPath -Encoding UTF8
  }
}

Write-Host "==> Deploying Firebase Hosting" -ForegroundColor Cyan
firebase use $ProjectId | Out-Host
firebase deploy --only hosting --non-interactive | Out-Host

Write-Host "All done. Site should be live: https://$ProjectId.web.app" -ForegroundColor Green

