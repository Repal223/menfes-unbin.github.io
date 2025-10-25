param(
  [string]$ProjectId = $env:FIREBASE_PROJECT_ID
)

$ErrorActionPreference = 'Stop'

function Require-Cmd($name){ if (-not (Get-Command $name -ErrorAction SilentlyContinue)) { throw "Missing command: $name" } }
Require-Cmd firebase

if (-not $ProjectId) { throw 'Set FIREBASE_PROJECT_ID or pass -ProjectId' }

Write-Host "==> Target project: $ProjectId" -ForegroundColor Cyan
firebase use $ProjectId | Out-Host

Write-Host "==> Checking Hosting sites" -ForegroundColor Cyan
$sites = firebase hosting:sites:list --project $ProjectId --json | ConvertFrom-Json
$needCreate = $true
try{ $needCreate = -not ($sites.result | Where-Object { $_.name -match "sites\/$ProjectId$" }) }catch{}
if ($needCreate) {
  Write-Host "==> Creating Hosting site '$ProjectId'" -ForegroundColor Yellow
  firebase hosting:sites:create $ProjectId --project $ProjectId | Out-Host
} else {
  Write-Host "==> Hosting site exists: $ProjectId" -ForegroundColor Green
}

Write-Host "==> Deploying Hosting" -ForegroundColor Cyan
firebase deploy --only hosting --non-interactive --project $ProjectId | Out-Host

Write-Host "==> Live at: https://$ProjectId.web.app" -ForegroundColor Green

