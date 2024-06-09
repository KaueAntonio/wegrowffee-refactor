using Microsoft.Data.SqlClient;
using System.Data.Common;

namespace Wegrowffee.Device.Api.Database;

public static class Connection
{
    public static DbConnection GetConnection(string connectionString)
    {
        var conn = new SqlConnection(connectionString);

        return conn;
    }
}
