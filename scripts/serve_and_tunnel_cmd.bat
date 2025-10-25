@echo off
REM Pure-CMD fallback (no PowerShell). Starts app, then opens Cloudflare Tunnel.
setlocal
cd /d "%~dp0.."

REM Pick port (default 5000)
set PORT=%1
if "%PORT%"=="" set PORT=5000

REM Check python
where python >nul 2>&1 || (
  echo Python not found in PATH.
  exit /b 1
)

REM Check cloudflared.exe
if not exist "cloudflared.exe" (
  echo cloudflared.exe not found in project root.
  exit /b 1
)

echo === Starting Flask app on port %PORT% ===
set PORT=%PORT%
start "menfes-app" /min python app.py

echo Waiting 3s for app to start...
timeout /t 3 /nobreak >nul

echo === Opening Cloudflare Quick Tunnel ===
echo Tip: Look for a URL like https://<random>.trycloudflare.com
"%cd%\cloudflared.exe" tunnel --url http://127.0.0.1:%PORT% --no-autoupdate
exit /b %errorlevel%

