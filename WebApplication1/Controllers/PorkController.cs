using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PorkController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public async Task<ActionResult<IEnumerable<string>>> Get()
        {
            var ret = await GetPorkPriceToday();
            return new string[] { ret };
        }

        public  async Task<string> GetPorkPriceToday()
        {
            using (var client = new HttpClient())
            {
                try
                {
                    var response = await client.GetAsync("https://agridata.coa.gov.tw/api/v1/PorkTransType/?MarketName=%E5%98%89%E7%BE%A9%E7%B8%A3");
                    bool isResponse = response.IsSuccessStatusCode;
                    if (isResponse)
                    {
                        return await response.Content.ReadAsStringAsync();
                    }
                    else
                        return "Fail";
                }
                catch (Exception ex)
                {
                    //EventLog(ex.Message);
                    Console.WriteLine(ex.Message);
                    return ex.Message;
                }
            }
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
