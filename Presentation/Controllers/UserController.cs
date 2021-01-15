using BLL;
using DAL;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Presentation.Models;

namespace Presentation.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController: ControllerBase
    {
        private readonly ClientService clientService;
        public UserController(FigorificoContext figorificoContext)
        {
             this.clientService = new ClientService(figorificoContext);
        }

        [HttpGet("{userName}")]
        public ActionResult<ClientViewModel> SearchByUser(string userName)
        {
            var response =  clientService.SearchByUser(userName);

            if(response.Client == null) return NotFound("Cliente no encontrado!");
            var client = new ClientViewModel(response.Client);
            return Ok(client);
        }
    }
}