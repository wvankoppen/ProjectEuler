<Query Kind="Program" />

void Main()
{
	var queryExpressionExample = (
		from row in Enumerable.Range('a',4)
		from col in Enumerable.Range(1,4)
		select ((char)row,col)
	);
	
	var methodExample = 
		Enumerable.Range('a',4)
		.SelectMany(
			row => 
				Enumerable.Range(1,4), 
				(row,col) => ((char)row,col)
		);
	
	queryExpressionExample.Dump();
	methodExample.Dump();
}

// Define other methods and classes here
