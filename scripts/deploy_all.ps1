$ErrorActionPreference = 'Stop'
param(
  [string]$ProjectId = 'menfes-unbin',
  [string]$Region = 'asia-southeast2',
  [string]$Service = 'menfes-unbin-api'
)

function Require-Cmd($name){
  $cmd = Get-Command $name -ErrorAction SilentlyContinue
  if(-not $cmd){ throw "Command not found: $name" }
  return $cmd
}

function Load-DotEnv($path){
  if(-not (Test-Path $path)){ return @{} }
  $map = @{}
  Get-Content $path | ForEach-Object {
    $line = $_.Trim()
    if(-not $line -or $line.StartsWith('#')){ return }
    $kv = $line -split '=', 2
    if($kv.Count -eq 2){ $k = $kv[0].Trim(); $v = $kv[1].Trim().Trim('"').Trim("'"); $map[$k] = $v }
  }
  return $map
}

function Get-Env($key, $fallback){
  $v = [Environment]::GetEnvironmentVariable($key)
  if([string]::IsNullOrWhiteSpace($v)){ return $fallback }
  return $v
}

Write-Host "==> Checking CLIs" -ForegroundColor Cyan
Require-Cmd node | Out-Null
Require-Cmd npm | Out-Null
Require-Cmd firebase | Out-Null
Require-Cmd gcloud | Out-Null

Write-Host "==> Loading .env (optional)" -ForegroundColor Cyan
$envMap = Load-DotEnv (Join-Path (Get-Location) '.env')

function Resolve-Var($k){ if($envMap.ContainsKey($k)){ return $envMap[$k] } else { return Get-Env $k '' } }

$FIREBASE_API_KEY = Resolve-Var 'FIREBASE_API_KEY'
$FIREBASE_PROJECT_ID = if([string]::IsNullOrWhiteSpace((Resolve-Var 'FIREBASE_PROJECT_ID'))) { $ProjectId } else { Resolve-Var 'FIREBASE_PROJECT_ID' }
$FIREBASE_MESSAGING_SENDER_ID = Resolve-Var 'FIREBASE_MESSAGING_SENDER_ID'
$FIREBASE_APP_ID = Resolve-Var 'FIREBASE_APP_ID'
$FIREBASE_VAPID_KEY = Resolve-Var 'FIREBASE_VAPID_KEY'
$SECRET_KEY = Resolve-Var 'SECRET_KEY'

if([string]::IsNullOrWhiteSpace($FIREBASE_API_KEY) -or [string]::IsNullOrWhiteSpace($FIREBASE_MESSAGING_SENDER_ID) -or [string]::IsNullOrWhiteSpace($FIREBASE_APP_ID) -or [string]::IsNullOrWhiteSpace($FIREBASE_VAPID_KEY)){
  Write-Host "Provide Firebase envs via .env or environment variables:" -ForegroundColor Yellow
  Write-Host "  FIREBASE_API_KEY, FIREBASE_PROJECT_ID, FIREBASE_MESSAGING_SENDER_ID, FIREBASE_APP_ID, FIREBASE_VAPID_KEY" -ForegroundColor Yellow
}

Write-Host "==> Firebase project: $ProjectId" -ForegroundColor Cyan
& firebase use $ProjectId | Out-Host

Write-Host "==> Install functions deps" -ForegroundColor Cyan
Push-Location functions
try{ npm ci | Out-Host } catch { npm i | Out-Host }
Pop-Location

Write-Host "==> Deploy Cloud Run backend ($Service in $Region)" -ForegroundColor Cyan
$envStr = @()
if($FIREBASE_API_KEY){ $envStr += "FIREBASE_API_KEY=$FIREBASE_API_KEY" }
if($FIREBASE_PROJECT_ID){ $envStr += "FIREBASE_PROJECT_ID=$FIREBASE_PROJECT_ID" }
if($FIREBASE_MESSAGING_SENDER_ID){ $envStr += "FIREBASE_MESSAGING_SENDER_ID=$FIREBASE_MESSAGING_SENDER_ID" }
if($FIREBASE_APP_ID){ $envStr += "FIREBASE_APP_ID=$FIREBASE_APP_ID" }
if($FIREBASE_VAPID_KEY){ $envStr += "FIREBASE_VAPID_KEY=$FIREBASE_VAPID_KEY" }
if($SECRET_KEY){ $envStr += "SECRET_KEY=$SECRET_KEY" }
$envArg = $envStr -join ','

if([string]::IsNullOrWhiteSpace($envArg)){
  Write-Host "Warning: no envs passed to Cloud Run." -ForegroundColor Yellow
}

& gcloud run deploy $Service --region $Region --source . --allow-unauthenticated $(if($envArg){"--set-env-vars=$envArg"}) | Out-Host

Write-Host "==> Deploy Firestore rules + indexes" -ForegroundColor Cyan
& firebase deploy --only firestore | Out-Host

Write-Host "==> Deploy Functions" -ForegroundColor Cyan
& firebase deploy --only functions | Out-Host

Write-Host "==> Deploy Hosting" -ForegroundColor Cyan
& firebase deploy --only hosting | Out-Host

Write-Host "==> Done. Visit Hosting URL shown above." -ForegroundColor Green

