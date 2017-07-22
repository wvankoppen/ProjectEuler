
$Values += (1..10000)

echo (Measure-Command -Expression {$Values | ForEach {$_}}).TotalMilliseconds  #256
echo (Measure-Command -Expression {foreach ($i in $Values){$_}}).TotalMilliseconds    #12 (but more memory!)

