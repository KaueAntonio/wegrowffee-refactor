using Dapper;
using System.Data;
using Wegrowffee.Device.Api.Database;
using Wegrowffee.Device.Api.Models;

var builder = WebApplication.CreateSlimBuilder(args);

var app = builder.Build();

var devicesApi = app.MapGroup("device");

devicesApi.MapPost("", async (InData data) =>
{
    string connectionString = Environment.GetEnvironmentVariable("DATABASE-CONN");
    
    using var conn = Connection.GetConnection(connectionString);
    
    try
    {
        await conn.ExecuteAsync(
            sql: @"dbo.",
            param: data,
            commandType: CommandType.StoredProcedure);
    }
    catch (Exception ex)
    {
        return Results.BadRequest(ex.Message);
    }

    return Results.Ok();
});

app.UseHttpsRedirection();

app.Run();
