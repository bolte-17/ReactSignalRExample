using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;

namespace lightning_signalr.Hubs
{
    public interface IPingClient
    {
        Task Pong();
    }

    public class PingHub : Hub { }
    public static class PingHubExtensions
    {
        public static async Task BroadcastPong(this IHubContext<PingHub> hub)
        {
            await hub.Clients.All.SendAsync(nameof(IPingClient.Pong));
        }
    }
}