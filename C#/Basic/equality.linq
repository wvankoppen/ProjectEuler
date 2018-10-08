<Query Kind="Program" />

void Main()
{
	long x = 1;
	int y = 1;
		
	(x==y).Dump("x==y");
		
	((long)x==(long)y).Dump("((long)x==(long)y)");
	((int)x==(int)y).Dump("((int)x==(int)y)");
		
	((object)x==(object)y).Dump("((object)x==(object)y)");
	ReferenceEquals(x,y).Dump("ReferenceEquals(x,y)");	
}