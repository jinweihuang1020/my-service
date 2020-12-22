using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Model;

namespace WebApplication1.Controllers
{
    [Route("api/v1/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        [HttpPost("Login")]
        public IActionResult Login([FromBody] UserInfo user_info)
        {
            if (user_info.Name == "123")
                return BadRequest("forbid");
            return Ok();
        }

    }
}
