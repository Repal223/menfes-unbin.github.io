<#
Usage:
  # Prasyarat: gh CLI sudah login (`gh auth login`)
  # Set ENV lokal lalu jalankan:
  $env:REPO="owner/name"
  $env:GCP_PROJECT_ID="..."
  $env:GCP_SA_KEY=(Get-Content path\to\sa.json -Raw)
  $env:FIREBASE_API_KEY="..."
  # ... dst
  ./scripts/gh_set_secrets.ps1

Tujuan:
  Mengisi GitHub Actions Secrets yang dipakai workflow deploy.
#>

param(
  [string]$Repo = $env:REPO
)

$ErrorActionPreference = 'Stop'

function Require-Cmd($name){ if (-not (Get-Command $name -ErrorAction SilentlyContinue)) { throw "Missing command: $name" } }
Require-Cmd gh

if(-not $Repo){ throw 'Set REPO env var (format: owner/name) or pass -Repo' }

function Set-Secret($name, $value){
  if([string]::IsNullOrWhiteSpace($value)){ return }
  Write-Host "=> Setting secret $name" -ForegroundColor Cyan
  $tmp = New-TemporaryFile
  Set-Content -Path $tmp -Value $value -NoNewline
  gh secret set $name --repo $Repo < $tmp
  Remove-Item $tmp -ErrorAction SilentlyContinue
}

# Required
Set-Secret 'GCP_PROJECT_ID' $env:GCP_PROJECT_ID
Set-Secret 'GCP_SA_KEY' $env:GCP_SA_KEY

# Firebase Hosting / token (either use FIREBASE_TOKEN or FIREBASE_SERVICE_ACCOUNT_MENFES_UNBIN)
Set-Secret 'FIREBASE_TOKEN' $env:FIREBASE_TOKEN
Set-Secret 'FIREBASE_SERVICE_ACCOUNT_MENFES_UNBIN' $env:FIREBASE_SERVICE_ACCOUNT_MENFES_UNBIN

# Firebase Web config (client)
Set-Secret 'FIREBASE_API_KEY' $env:FIREBASE_API_KEY
Set-Secret 'FIREBASE_AUTH_DOMAIN' $env:FIREBASE_AUTH_DOMAIN
Set-Secret 'FIREBASE_PROJECT_ID' $env:FIREBASE_PROJECT_ID
Set-Secret 'FIREBASE_STORAGE_BUCKET' $env:FIREBASE_STORAGE_BUCKET
Set-Secret 'FIREBASE_MESSAGING_SENDER_ID' $env:FIREBASE_MESSAGING_SENDER_ID
Set-Secret 'FIREBASE_APP_ID' $env:FIREBASE_APP_ID

# Optional app secrets
Set-Secret 'SECRET_KEY' $env:SECRET_KEY
Set-Secret 'ADMIN_USERNAME' $env:ADMIN_USERNAME
Set-Secret 'ADMIN_PASSWORD' $env:ADMIN_PASSWORD

Write-Host 'All done.' -ForegroundColor Green

