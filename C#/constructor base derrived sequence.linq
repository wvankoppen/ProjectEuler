<Query Kind="Program" />

void Main()
{
	var car = new Car();
}


class Vehicle {
	public Vehicle(){
		this.Init();
	}

	public virtual void Init() 
	{
		Console.WriteLine("Vehicle.Init");
	}
}

class Car : Vehicle {
	public Car(){
		this.Init();
	}
	
	public override void Init() 
	{
		Console.WriteLine("Car.Init");
	}
}
