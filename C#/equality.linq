<Query Kind="Program" />

void Main()
{
	var x = 1;
	var y = 1;
	
	(x==y).Dump();
	((object)x==(object)y).Dump();
	ReferenceEquals(x,y).Dump();
	
}

// Define other methods and classes here
