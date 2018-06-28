$Result = Start-Process -PassThru -FilePath "C:\Program Files (x86)\InstallShield Installation Information\{EADE3DD5-C475-4B87-A729-3D3898D8F1E4}\setup.exe" -ArgumentList "SILENT UNINSTALL"

Write-Host $Result

# Timeout of 60 seconds to prevent the script from never completing if the exit code is not returned as expected 
$Result | Wait-Process -Timeout 5400 -ErrorAction SilentlyContinue;

Write-Host Continue!