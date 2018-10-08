<Query Kind="Program" />

void Main()
{
	var x = new {X = "123"};
	Do(x);
	
}

private void Do(dynamic x)
{
	Console.Write(x);
	Console.Write(x.X);
}
