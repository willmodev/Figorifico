using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Presentation.Config;
using Presentation.Models;
using Presentation.Service;
using BLL;
using Entity;
using DAL;
namespace Presentation.Controllers
{
    [Authorize]
    [ApiController]
    [Route("api/[controller]")]

    public class LoginController: ControllerBase
    {
        private JwtService _jwtService;
        private UserService _userService;

        public LoginController(FigorificoContext context, IOptions<AppSetting> appSettings)
        {
	        _userService = new UserService(context);
	        _jwtService = new JwtService(appSettings);      
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Login([FromBody]LoginInputModel model)
        {
            var user = _userService.Validate(model.UserName, model.Password);
            if (user == null) return BadRequest("Username or password is incorrect");
            var response = _jwtService.GenerateToken(user);
            return Ok(response);
        }


    }
}