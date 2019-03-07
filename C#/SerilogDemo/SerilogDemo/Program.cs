using System.Threading;
using Serilog;
using Serilog.Core;
using Serilog.Events;

namespace SerilogDemo
{
    class Program
    {
        static void Main(string[] args)
        {
            Log.Logger = new LoggerConfiguration()
                .Enrich.With(new ThreadIdEnricher())
                .WriteTo.Console()
                .WriteTo.File("log-.txt", rollingInterval: RollingInterval.Day,outputTemplate: "{ThreadId}")
                .CreateLogger();
            var person = new {name="wouter"};
            Log.Information("No one listens to {@person}!", person);
        }
    }

    class ThreadIdEnricher : ILogEventEnricher
    {
        public void Enrich(LogEvent logEvent, ILogEventPropertyFactory propertyFactory)
        {
            logEvent.AddPropertyIfAbsent(propertyFactory.CreateProperty("ThreadId", Thread.CurrentThread.ManagedThreadId));
        }
    }
}
