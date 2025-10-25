param(
  [string]$ProjectId = $env:PROJECT_ID
)

$ErrorActionPreference = 'Stop'

function Require-Cmd($name){
  if (-not (Get-Command $name -ErrorAction SilentlyContinue)){
    throw "Command '$name' not found. Please install it first."
  }
}

Require-Cmd gcloud

if (-not $ProjectId) { throw 'PROJECT_ID env var or -ProjectId is required' }

Write-Host "==> Enabling Anonymous Auth for project '$ProjectId'" -ForegroundColor Cyan
gcloud config set project $ProjectId | Out-Null
$token = (gcloud auth print-access-token).Trim()
if (-not $token) { throw 'Failed to obtain access token via gcloud' }

$uri = "https://identitytoolkit.googleapis.com/admin/v2/projects/$ProjectId/config"
$body = @{ signIn = @{ anonymous = @{ enabled = $true } } } | ConvertTo-Json -Compress

try{
  $resp = Invoke-RestMethod -Method Patch -Uri $uri -Headers @{ Authorization = "Bearer $token"; 'Content-Type'='application/json' } -Body $body
  Write-Host "==> Anonymous Auth enabled." -ForegroundColor Green
}catch{
  Write-Host "Error enabling Anonymous Auth:" -ForegroundColor Red
  throw
}

