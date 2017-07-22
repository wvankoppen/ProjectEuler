clear

Get-Alias -Definition Foreach-Object
Get-Alias -Definition Select-Object

$Values = (11..13)

$Values | select {$_ -gt 11}

echo "--------"

$Values | foreach {$_ -gt 1}

echo "========"

$Values | foreach {'pre'; $_; 'post1'; 'post2';}