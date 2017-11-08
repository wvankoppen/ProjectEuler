<Query Kind="Program">
  <Namespace>System</Namespace>
</Query>

public delegate string FirstDelegate (int x);
    
public class DelegateTest
{    
    public string name;
        
    public static string StaticMethod (int i)
    {
        return string.Format ("Static method: {0}", i);
    }

    public string InstanceMethod (int i)
    {
        return string.Format ("{0}: {1}", name, i);
    }
}

void Main()
{
	var StaticMethodDelegate = new FirstDelegate(DelegateTest.StaticMethod);
        
    var instance = new DelegateTest();
    instance.name = "My instance";
    var InstanceMethodDelegate = new FirstDelegate(instance.InstanceMethod);
    
	var combinedDelegate = (FirstDelegate)Delegate.Combine(InstanceMethodDelegate, StaticMethodDelegate);
	
    Console.WriteLine (StaticMethodDelegate(1)); 
    Console.WriteLine (InstanceMethodDelegate(2));  
	
	Console.WriteLine (combinedDelegate(1));  
}