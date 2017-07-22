<Query Kind="Program" />

void Main()
{
	var Dict = new Dictionary<Key,int>();
	var key = new Key{A="1"};
	Dict.Add(key,1);
	key.A = "2";
	Dict[key].Dump();
}

public class Key {
	public string A {get;set;}
}

