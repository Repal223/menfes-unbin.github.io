<#
End-to-end helper to:
  - Initialize git repo if needed
  - Create GitHub repo (if missing)
  - Push code to main
  - Set GitHub Secrets (from current environment)
  - Trigger deploy workflow (optional)

Usage (PowerShell):
  $env:REPO="owner/menfes-unbin"
  $env:GCP_PROJECT_ID="your-gcp-project"
  $env:GCP_SA_KEY=(Get-Content .\sa-key.json -Raw)
  # ... set other envs as needed ...
  ./scripts/setup_and_deploy.ps1 -Repo $env:REPO

Prereqs:
  - gh CLI installed and logged in (gh auth login)
#>

param(
  [Parameter(Mandatory=$true)][string]$Repo,
  [string]$DefaultBranch = 'main'
)

$ErrorActionPreference = 'Stop'

function Require-Cmd($name){ if (-not (Get-Command $name -ErrorAction SilentlyContinue)) { throw "Missing command: $name" } }
Require-Cmd git
Require-Cmd gh

Write-Host "==> Ensuring local git repo" -ForegroundColor Cyan
if (-not (Test-Path .git)){
  git init | Out-Null
  git add -A
  git commit -m "Initial import: Menfes UNBIN" | Out-Null
}

Write-Host "==> Ensuring default branch '$DefaultBranch'" -ForegroundColor Cyan
git branch -M $DefaultBranch | Out-Null

Write-Host "==> Ensuring remote repo $Repo" -ForegroundColor Cyan
$exists = $false
try { gh repo view $Repo > $null 2>&1; $exists = $true } catch {}
if (-not $exists) {
  gh repo create $Repo --public -y | Out-Host
}

if (-not (git remote | Select-String -Quiet '^origin$')){
  git remote add origin "https://github.com/$Repo.git"
}

Write-Host "==> Pushing code" -ForegroundColor Cyan
git push -u origin $DefaultBranch

Write-Host "==> Setting GitHub Secrets (if env vars present)" -ForegroundColor Cyan
& (Join-Path $PSScriptRoot 'gh_set_secrets.ps1') -Repo $Repo

Write-Host "==> Triggering workflow dispatch (if available)" -ForegroundColor Cyan
try { gh workflow run 'Deploy Menfes UNBIN' --repo $Repo | Out-Host } catch { Write-Host "Workflow dispatch skipped or failed." -ForegroundColor Yellow }

Write-Host "All done. Check GitHub Actions for deployment progress." -ForegroundColor Green

