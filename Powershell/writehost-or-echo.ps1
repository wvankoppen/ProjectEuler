Get-Alias -Definition Write-Output

echo "123" | %{$_.Replace("2","4")}
write-host "123" | %{$_.Replace("2","4")}