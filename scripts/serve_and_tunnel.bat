@echo off
REM Simple launcher that bypasses PowerShell execution policy for this run
setlocal
cd /d "%~dp0.."
where powershell >nul 2>&1
if errorlevel 1 (
  echo PowerShell not found. Please run scripts\serve_and_tunnel_cmd.bat
  exit /b 1
)
powershell -NoProfile -ExecutionPolicy Bypass -File ".\scripts\serve_and_tunnel.ps1" %*
exit /b %errorlevel%

