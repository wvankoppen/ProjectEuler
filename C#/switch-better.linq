<Query Kind="Program" />

// Open-closed
void Main()
{
	bool isStopRequested = false;
		
	var chooser = new Chooser(() => { Console.WriteLine("Unknown action!"); });
	chooser.Add("s", () => { Console.WriteLine("Stop!"); isStopRequested = true; });
	chooser.Add("d", () => { Console.WriteLine("Do it!"); });
	chooser.Add("o", () => { Console.WriteLine("Do the other!"); });
	
	while (!isStopRequested) 
	{
		string userInput = Console.ReadLine();
		chooser.Choose(userInput);
	}
}

class Chooser 
{
	Dictionary<string, Action> choices;
	Action fallback;

	public Chooser(Action fallback) 
	{
		this.fallback = fallback;
		choices = new Dictionary<string, Action>();
	}
	
	public void Add(string name, Action action) 
	{
		this.choices.Add(name, action);
	}
	
	public void Choose(string name) 
	{
		Action act;
		if (!this.choices.TryGetValue(name, out act))
		{
			act = fallback;
		}
		act();
	}
}