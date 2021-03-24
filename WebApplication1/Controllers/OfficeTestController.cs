using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
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

        [HttpGet("GetCheckIn")]
        public async Task<ActionResult> GetCheckIn()
        {
            OfficeTestModel.CheckState.ReplyFlag = false;
            OfficeTestModel.CheckState.ActiveFlag = true;
            Stopwatch sw = new Stopwatch();
            sw.Start();
            while (!OfficeTestModel.CheckState.ReplyFlag)
            {
                if (sw.ElapsedMilliseconds > 1000)
                {
                }
                Thread.Sleep(1);
            }
            return Ok("打卡成功");
        }

        [HttpGet("GetCheckInOK")]
        public async Task<ActionResult> GetCheckInOK()
        {
            OfficeTestModel.CheckState.LastCheckTime = DateTime.Now.AddDays(1);
            OfficeTestModel.CheckState.ReplyFlag = true;
            OfficeTestModel.CheckState.ActiveFlag = false;
            return Ok("[office] Check In Finish!");
        }

        [HttpGet("GetActiveFlag")]
        public async Task<ActionResult> GetActiveFlag()
        {
            OfficeTestModel.CheckState.LastAliveTime = DateTime.Now.AddDays(1);//美國比台灣晚一天時區
            return Ok(OfficeTestModel.CheckState.ActiveFlag);
        }


        [HttpGet("GetCheckState")]
        public async Task<ActionResult> GetCheckState()
        {
            return Ok(OfficeTestModel.CheckState);
        }


        [HttpGet("AutoRpFinish")]
        public async Task<ActionResult> AutoRpFinish()
        {
            OfficeTestModel.HRPState.LastRpTime = DateTime.Now;
            return Ok("Ok");
        }

        [HttpGet("GetHRPState")]
        public async Task<ActionResult> GetHRPState()
        {
            return Ok(OfficeTestModel.HRPState);
        }


        //GET api/values/5
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
