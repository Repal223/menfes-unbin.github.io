<#
Creates a CI Deploy Service Account and key for a GCP project.

Usage (PowerShell):
  ./scripts/create_gcp_sa.ps1 -ProjectId your-gcp-project -ServiceAccount ci-deploy -KeyOut .\sa-key.json

Prereqs:
  - gcloud CLI installed and authenticated (gcloud auth login)
#>

param(
  [Parameter(Mandatory=$true)][string]$ProjectId,
  [string]$ServiceAccount = 'ci-deploy',
  [string]$KeyOut = '.\\sa-key.json'
)

$ErrorActionPreference = 'Stop'

function Require-Cmd($name){ if (-not (Get-Command $name -ErrorAction SilentlyContinue)) { throw "Missing command: $name" } }
Require-Cmd gcloud

Write-Host "==> Configuring project $ProjectId" -ForegroundColor Cyan
gcloud config set project $ProjectId | Out-Null
Write-Host "==> Enabling APIs (Run, Registry, IAM)" -ForegroundColor Cyan
gcloud services enable run.googleapis.com containerregistry.googleapis.com iam.googleapis.com | Out-Host

$saEmail = "$ServiceAccount@$ProjectId.iam.gserviceaccount.com"
Write-Host "==> Creating service account $saEmail" -ForegroundColor Cyan
gcloud iam service-accounts create $ServiceAccount --display-name="CI Deploy SA" | Out-Host

Write-Host "==> Granting roles" -ForegroundColor Cyan
gcloud projects add-iam-policy-binding $ProjectId --member="serviceAccount:$saEmail" --role="roles/run.admin" | Out-Host
gcloud projects add-iam-policy-binding $ProjectId --member="serviceAccount:$saEmail" --role="roles/iam.serviceAccountUser" | Out-Host
gcloud projects add-iam-policy-binding $ProjectId --member="serviceAccount:$saEmail" --role="roles/storage.admin" | Out-Host

Write-Host "==> Creating key at $KeyOut" -ForegroundColor Cyan
gcloud iam service-accounts keys create $KeyOut --iam-account=$saEmail | Out-Host

Write-Host "All done. Key file: $KeyOut" -ForegroundColor Green
Write-Host "Next: set secrets with scripts/gh_set_secrets.ps1 using GCP_SA_KEY from the key file." -ForegroundColor Green

