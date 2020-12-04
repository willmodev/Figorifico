using System.Linq;
using System.Collections.Generic;
using BLL;
using DAL;
using Entity;
using Microsoft.AspNetCore.Mvc;
using Presentation.Models;

namespace Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController: ControllerBase
    {
        private readonly ClientService clientService;

        public ClientController(FigorificoContext figorificoContext)
        {
            this.clientService = new ClientService(figorificoContext);
        }

        [HttpPost]
        public ActionResult<ClientViewModel> Post(ClientInputModel clientInput)
        {
            Client client = Map(clientInput);
            var response = clientService.Save(client);

            if (response.Error) {
                BadRequest(response.Message);
            }

            return Ok(response.Client);

        }
        [HttpGet("{identification}")]
        public ActionResult<ClientViewModel> SearchById(string identification)
        {
            var response =  clientService.SearchById(identification);

            if(response.Client == null) return NotFound("Cliente no encontrado!");
            var client = new ClientViewModel(response.Client);
            return Ok(client);
        }

        private Client Map(ClientInputModel clientInput)
        {
            Client client = new Client();

            client.Indentification = clientInput.Indentification;
            client.Name = clientInput.Name;
            client.LastName = clientInput.LastName;
            client.Phone = clientInput.Phone;
            client.Address = clientInput.Address;
            client.Neighborhood = clientInput.Neighborhood;
            client.City = clientInput.City;
            client.Department = clientInput.Department;

            return client;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ClientViewModel>> GetResult()
        {
            var response = clientService.GetConsult();

            if (response.Clients == null) return BadRequest(response.Message);

            var clients = response.Clients.Select(c => new ClientViewModel(c));

            return Ok(clients);

        }

        [HttpDelete("{identification}")]
        public ActionResult<ClientViewModel> Delete(string identification)
        {
            var response =  clientService.Delete(identification);

            if (response.Client == null) return BadRequest(response.Message);

            return Ok(response.Client);
        }

        [HttpPut] 
        public ActionResult<ClientViewModel> Modify(ClientInputModel clientInput)
        {
            Client client = Map(clientInput);
            var response =  clientService.Modify(client);

            if (response.Error) return BadRequest(response.Message);

            return Ok(response.Client);
        }
    }
}