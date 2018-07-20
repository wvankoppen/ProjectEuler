<Query Kind="Program" />

void Main()
{
	var defensiveUserService = new DefensiveUserService();
	defensiveUserService.GetUser(1).Value.Name.Dump();
	//defensiveUserService.GetUser(2).Value.Name.Dump();
	//defensiveUserService.GetUser(3).Value.Name.Dump();
	
	var userService = new UserService();
	userService.GetUser(1).Name.Dump();
	userService.GetUser(2).Name.Dump();
	userService.GetUser(3).Name.Dump();
}

public class User 
{
	public string Name {get;set;}
}

public class UserService {
	private Dictionary<int,User> users = new Dictionary<int,User>{{1,new User{Name = "Bill"}}};

	public User GetUser(int id) 
	{
		return this.users[id];
	}
}


public class DefensiveUserService {
	private Dictionary<int,User> users = new Dictionary<int,User>{{1,new User{Name = "Bill"}}};
		
	public Maybe<User> GetUser(int id) 
	{
		if (this.users.ContainsKey(id))
		{
			return Maybe<User>.Some(this.users[id]);
		}
		return Maybe<User>.None;
	}
}

public struct Maybe<T>
{
  readonly IEnumerable<T> values;

  public static Maybe<T> Some(T value)
  {
    if (value == null)
    {
      throw new InvalidOperationException();
    }

    return new Maybe<T>(new [] { value });
  }

  public static Maybe<T> None => new Maybe<T>(new T[0]);

  private Maybe(IEnumerable<T> values)
  {
    this.values = values;
  }

  public bool HasValue => values != null && values.Any();

  public T Value
  {
    get
    {
      if (!HasValue)
      {
        throw new InvalidOperationException("Maybe does not have a value");
      }

      return values.Single();
    }
  }
}

