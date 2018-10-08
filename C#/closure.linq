<Query Kind="Program" />

void Main()
{	
	Action<int,int> mul = (x,y) => 
	{
		Console.WriteLine(x * y);
	};
	
	Action<int> mul2 = (z) => 
	{
		mul(z,2);
	};	
	
	Action<int> mul3 = (z) => 
	{
		mul(z,3);
	};	
	Action<int> mul3plus1 = (z) => 
	{
		mul3(z + 1);
	};	
	
	mul2(6);
	mul3(6);
	mul3plus1(6);
}

// Define other methods and classes here
