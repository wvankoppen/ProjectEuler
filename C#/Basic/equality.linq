<Query Kind="Program" />

void Main()
{
	long x = 1;
	int y = 1;
	
	
	(x==y).Dump();
		
	((long)x==(long)y).Dump();
	((int)x==(int)y).Dump();
		
	((object)x==(object)y).Dump();
	ReferenceEquals(x,y).Dump();
	
}

// Define other methods and classes here