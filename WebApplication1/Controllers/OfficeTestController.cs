using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
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
            return Ok(JsonConvert.SerializeObject( OfficeTestModel.CurrentKXTestDATA));
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
