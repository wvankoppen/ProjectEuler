<Query Kind="Program">
  <Reference>&lt;RuntimeDirectory&gt;\System.Threading.dll</Reference>
  <Reference>&lt;RuntimeDirectory&gt;\System.Threading.Tasks.dll</Reference>
</Query>

void Main()
{
	new A().GetInt().Dump();
	var Mock<A> mock = new Mock<A>();
	
}

class A{
public async System.Threading.Tasks.Task<int> GetInt(){
return await System.Threading.Tasks.Task.FromResult(1);
}}