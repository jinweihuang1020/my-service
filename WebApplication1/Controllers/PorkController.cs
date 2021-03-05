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
    public class PorkController : ControllerBase
    {
        // GET api/values
        [HttpGet]
        public async Task<ActionResult<IEnumerable<string>>> Get()
        {
            var ret = await PorkModel.GetPorkPriceToday();
            return new string[] { ret, Model.PorkModel.QueryNum + " 次", JsonConvert.SerializeObject(PorkModel.LeastSaleInfo) };
        }

        // GET api/values/5
        [HttpPost("SaleData")]
        public ActionResult<string> SaleData([FromBody] PorkModel.SaleInfo Data)
        {
            try
            {
                PorkModel.LeastSaleInfo = Data;
            }
            catch (Exception ex)
            {
                return NoContent();
            }
            return Ok("Done");
        }

        #region 範例


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
        #endregion
    }
}
