<Query Kind="Program" />

// Closed-open example
void Main()
{
	bool isStopRequested = false;
	
	while (!isStopRequested) 
	{
		string userInput = Console.ReadLine();
		switch (userInput) 
		{
			case "s":
				Console.WriteLine("Stop");
				isStopRequested = true;
			break;
			case "d":
				Console.WriteLine("Do it!");
			break;
			case "o":
				Console.WriteLine("Do the other!");
			break;
			default:
				Console.WriteLine("Invalid choice!");
			break;
		}
	}
}