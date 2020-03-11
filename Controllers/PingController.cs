using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using lightning_signalr.Hubs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;

namespace lightning_signalr.Controllers
{
    [ApiController]
    [Route("/ping")]
    public class PingController : ControllerBase
    {
        public PingController(IHubContext<PingHub> pingHub) => this.pingHub = pingHub;

        private readonly IHubContext<PingHub> pingHub;

        [HttpGet("")]
        public async Task<string> Ping()
        {
            await pingHub.BroadcastPong();
            return "pong";
        }
    }
}
