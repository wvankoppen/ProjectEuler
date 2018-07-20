<Query Kind="Program" />

void Main()
{
	var dict = new Dictionary<MyObj, int>();
	var key = new MyObj{Value = "1"};
	
	dict.Add(key, 1);
	dict[key].Dump();
	
	key.Value = "2";
	dict[key].Dump();
}

public class MyObj {
	public string Value {get;set;}
}