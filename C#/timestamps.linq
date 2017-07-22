<Query Kind="Program" />

void Main()
{
//http://172.17.87.45/resources/trends/acb361ea-23c7-4bfd-af80-95806942a1fb?start=1450788844735&end=1450792444735
//var epoch = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);
//var timestamp = epoch.AddSeconds(1450788849);
//timestamp.Dump();

//((1450872914864-1450872480000)/1000).Dump();
//((1450872918741-1450869318741)/1000).Dump();


long timestamp1=1450873440000;
long timestamp2=1450872960000;
//((timestamp1-timestamp2)/1000).Dump();

//((1450873698146-1450870098146)/1000/60).Dump();
var epoch = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc);
epoch.AddSeconds(1457441659).Dump();
//epoch.AddSeconds(1450873440).Dump();

}

// Define other methods and classes here