using System.Collections.Generic;
using System.Linq;
using BLL;
using DAL;
using Entity;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Presentation.Models;

namespace Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehicleController: ControllerBase
    {
        private readonly VehicleService vehicleService;
        public VehicleController(FigorificoContext figorificoContext)
        {
            this.vehicleService =  new VehicleService(figorificoContext);
        }

        [HttpPost]
        public ActionResult<VehicleViewModel> Post(VehicleInputModel vehicleInput)
        {
            Vehicle vehicle = MapVehicle(vehicleInput);

            var response = vehicleService.Save(vehicle);

            if (response.Error) {
                
                ModelState.AddModelError("Guardar Domiciliario", response.Message);
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }

            return Ok(response.Vehicle);
        }

        [HttpGet]
        public ActionResult<IEnumerable<VehicleViewModel>> Get()
        {
            var response = vehicleService.GetConsult();
            if (response.Vehicles == null) return BadRequest(response.Message);

            var vehicles = response.Vehicles.Select(v => new VehicleViewModel(v));

            return Ok(vehicles);
        }

        private Vehicle MapVehicle(VehicleInputModel vehicleInput)
        {
            Vehicle vehicle =  new Vehicle();

            vehicle.Placa = vehicleInput.Placa;
            vehicle.Make = vehicleInput.Make;
            vehicle.Model = vehicleInput.Model;
            vehicle.Domiciliary = MapDomiciliary(vehicleInput.Domiciliary);

            return vehicle;
        }

        private Domiciliary MapDomiciliary(DomiciliaryInputModel domiciliaryInput)
        {
            Domiciliary domiciliary = new Domiciliary();

            domiciliary.Identification = domiciliaryInput.Identification;
            domiciliary.Name =  domiciliaryInput.Name;
            domiciliary.LastName = domiciliaryInput.LastName;
            domiciliary.Address =  domiciliaryInput.Address;
            domiciliary.User = MapUser(domiciliaryInput.User);

            return domiciliary;
        }

        private User MapUser(UserInputModel userInput)
        {
            User user = new User();
            user.UserName = userInput.UserName;
            user.Password = userInput.Password;
            user.Status = userInput.Status;
            user.Role = userInput.Role;

            return user;
        }
    }
}