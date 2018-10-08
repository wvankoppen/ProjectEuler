<Query Kind="Program" />

static void Main(string[] args)
{
    var inc = new DisplayClass();
	var inc2 = new DisplayClass();
    Console.WriteLine(inc.Inc());
	Console.WriteLine(inc.Inc());
	Console.WriteLine(inc.Inc());
	Console.WriteLine();
    Console.WriteLine(inc2.Inc());
	Console.WriteLine(inc.Inc());
	Console.WriteLine(inc.Inc());
}

public class DisplayClass
{
    public int invokeCount;
    
	public int Inc() 
	{
		return ++this.invokeCount;
	}
}