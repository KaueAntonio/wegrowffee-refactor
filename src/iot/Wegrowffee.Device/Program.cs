using System.Net.Http.Json;

var client = new HttpClient();

var deviceApiUri = Environment.GetEnvironmentVariable("DEVICE-API-URI");
var deviceName = Environment.GetEnvironmentVariable("DEVICE-NAME");

client.BaseAddress = new Uri(deviceApiUri);

while (true)
{
    var input = new InData()
    {
        Date = DateTime.UtcNow,
        Humidity = new Random().NextDouble() * 10,
        Temperature = new Random().NextDouble() * 10,
        Id = deviceName
    };

    var post = Task.Run(async () => 
        await client.PostAsJsonAsync("device", input));

    Thread.Sleep(1000);
}

class InData
{
    public string Id { get; set; }
    public double Humidity { get; set; }
    public double Temperature { get; set; }
    public DateTime Date { get; set; }
}