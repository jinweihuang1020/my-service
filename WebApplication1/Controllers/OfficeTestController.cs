using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WebApplication1.Model;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OfficeTestController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public async Task<ActionResult<string>> Get()
        {
            Console.WriteLine("GET REQUEST");
            return Ok(JsonConvert.SerializeObject(OfficeTestModel.CurrentKXTestDATA));
        }

        public static bool ReplyFlag = false;
        public static bool ActiveFlag = false;
        [HttpGet("GetCheckIn")]
        public async Task<ActionResult> GetCheckIn()
        {
            ReplyFlag = false;
            ActiveFlag = true;
            Stopwatch sw = new Stopwatch();
            sw.Start();
            while (!ReplyFlag)
            {
                if (sw.ElapsedMilliseconds > 20000)
                {
                    return Ok("Timeout");
                }
                Thread.Sleep(1);
            }
            return Ok("[End User] Check In Finish!");
        }

        [HttpGet("GetCheckInOK")]
        public async Task<ActionResult> GetCheckInOK()
        {
            ReplyFlag = true;
            ActiveFlag = false;
            return Ok("[office] Check In Finish!");
        }
        [HttpGet("GetActiveFlag")]
        public async Task<ActionResult> GetActiveFlag()
        {
            return Ok(ActiveFlag);
        }

        // GET api/values/5
        [HttpPost("KxTestDataUpdate")]
        public ActionResult<string> SaleData([FromBody] OfficeTestModel.KxTestSta Data)
        {
            try
            {
                OfficeTestModel.CurrentKXTestDATA = Data;
            }
            catch (Exception ex)
            {
                return NoContent();
            }
            return Ok("Done");
        }

    }
}
