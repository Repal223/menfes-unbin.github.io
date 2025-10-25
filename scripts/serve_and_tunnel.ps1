<#
Usage (PowerShell):
  ./scripts/serve_and_tunnel.ps1

What it does:
  - Starts the Flask app on port 5000
  - Waits until the app is reachable
  - Starts a Cloudflare Quick Tunnel that gives you a public URL

Requirements:
  - Python 3 with Flask and dependencies (already present in this repo's env)
  - cloudflared.exe in the project root (already included)
#>

param(
  [int]$Port = 5000
)

$ErrorActionPreference = 'Stop'

function Require-Cmd($name){
  if (-not (Get-Command $name -ErrorAction SilentlyContinue)){
    throw "Command '$name' not found. Please install it first."
  }
}

function Wait-Port([string]$host, [int]$port, [int]$retries = 40){
  for($i=0; $i -lt $retries; $i++){
    try{
      $resp = Invoke-WebRequest -Uri "http://$host:$port/" -UseBasicParsing -TimeoutSec 3 -ErrorAction Stop
      if($resp.StatusCode -ge 200){ return $true }
    }catch{}
    Start-Sleep -Milliseconds 300
  }
  return $false
}

Write-Host "==> Checking prerequisites" -ForegroundColor Cyan
Require-Cmd python

$cf = Join-Path $PSScriptRoot '..' 'cloudflared.exe'
if (-not (Test-Path $cf)){
  throw "cloudflared.exe not found at $cf"
}

Write-Host "==> Starting Flask app on port $Port" -ForegroundColor Cyan
$env:PORT = "$Port"
$appProc = Start-Process -FilePath python -ArgumentList 'app.py' -PassThru -WindowStyle Minimized
Write-Host ("    PID=" + $appProc.Id)

Write-Host "==> Waiting for app to become ready..." -ForegroundColor Cyan
if (-not (Wait-Port -host '127.0.0.1' -port $Port)){
  try{ $appProc | Stop-Process -Force }catch{}
  throw "App did not start listening on port $Port"
}
Write-Host "==> App is up at http://127.0.0.1:$Port" -ForegroundColor Green

Write-Host "==> Opening Cloudflare Quick Tunnel (no login required)" -ForegroundColor Cyan
Write-Host "    Tip: The public URL will look like https://<random>.trycloudflare.com" -ForegroundColor DarkGray

# Start cloudflared and mirror output; attempt to extract and print the URL prominently
$psi = New-Object System.Diagnostics.ProcessStartInfo
$psi.FileName = $cf
$psi.Arguments = "tunnel --url http://127.0.0.1:$Port --no-autoupdate"
$psi.UseShellExecute = $false
$psi.RedirectStandardOutput = $true
$psi.RedirectStandardError = $true

$proc = New-Object System.Diagnostics.Process
$proc.StartInfo = $psi
$null = $proc.Start()

# Read output lines and surface the public URL if found
Start-Job -ScriptBlock {
  param($Handle)
  while(-not $Handle.HasExited){ Start-Sleep -Seconds 1 }
} -ArgumentList $proc | Out-Null

$urlPrinted = $false
while(-not $proc.HasExited){
  if(-not $proc.StandardOutput.EndOfStream){
    $line = $proc.StandardOutput.ReadLine()
    if($line){
      Write-Host $line
      if(-not $urlPrinted){
        if($line -match 'https?://[a-z0-9\-]+\.trycloudflare\.com'){
          $pub = $Matches[0]
          Write-Host "==> PUBLIC URL: $pub" -ForegroundColor Yellow
          $urlPrinted = $true
        }
      }
    }
  }
  if(-not $proc.StandardError.EndOfStream){
    $eline = $proc.StandardError.ReadLine()
    if($eline){ Write-Host $eline -ForegroundColor DarkRed }
  }
  Start-Sleep -Milliseconds 100
}

try{ if(-not $appProc.HasExited){ $appProc | Stop-Process -Force } }catch{}
if($proc.ExitCode -ne 0){ exit $proc.ExitCode }

