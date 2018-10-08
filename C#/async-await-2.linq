<Query Kind="Program">
  <Namespace>System.Runtime.CompilerServices</Namespace>
  <Namespace>System.Threading.Tasks</Namespace>
</Query>

void Main()
{
	new Runner().Run();
}

class Runner 
{
	public async void Run() 
	{
		var s = new Stopwatch();
		s.Start();
		var waitOneSecond = new TimeWaiter(2);
		var waitFiveSeconds = new TimeWaiter(5);
		
		await waitOneSecond;
		s.Elapsed.Dump();
		
		await waitOneSecond;
		s.Elapsed.Dump();
		
		await waitOneSecond;
		s.Elapsed.Dump();
		
		await waitFiveSeconds;
		s.Elapsed.Dump();
		"== FINISHED ==".Dump();
	}
}


class TimeWaiter : INotifyCompletion
{
	private int seconds;
	
	public TimeWaiter(int seconds) 
	{
		this.seconds = seconds;
	}

	public TimeWaiter GetAwaiter() 
	{
		"GetAwaiter".Dump();
		return this;
	}
	
	public void OnCompleted (Action continuation) 
	{
		"OnCompleted".Dump();
		Task.Factory.StartNew(() => 
		{ 
			Thread.Sleep(seconds * 1000);
			continuation(); 
		});
	}
	
	public bool IsCompleted
    {
        get 
		{ 
			"IsCompleted".Dump();
			return false; 
		}
    }

    public void GetResult()
    {
		"GetResult".Dump();
    }
}

