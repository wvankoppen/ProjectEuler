<Query Kind="Program" />

void Main()
{
	var yielded = GetDataYield();
	var straighted = GetDataStraight();
	
	(yielded.First() == yielded.First()).Dump();
	(straighted.First() == straighted.First()).Dump();
}

public IEnumerable<DTO> GetDataYield()
{
 	"yield".Dump();
  yield return new DTO();
}

public IEnumerable<DTO> GetDataStraight()
{
	"straight".Dump();
  return new List<DTO>{new DTO()};
}

public  class DTO {
	public DTO()
	{		
	}	
}

// Define other methods and classes here
