using System;
using System.Collections.Generic;
using System.Linq;
using DAL;
using Entity;
using Microsoft.EntityFrameworkCore;

namespace BLL
{
    public class VehicleService
    {
        private readonly FigorificoContext context;

        public VehicleService(FigorificoContext figorificoContext)
        {
            context = figorificoContext;
        }

        public VehicleServiceResponse Save(Vehicle vehicle)
        {
            try {
                context.Add(vehicle);
                context.SaveChanges();
                return new VehicleServiceResponse(vehicle);

            } catch (Exception e) {
                return new VehicleServiceResponse($"Error del aplicacion: {e.Message}");
            }
        }
        public VehicleConsultResponse GetConsult()
        {
            try {
                IList<Vehicle> vehicles =  context.Vehicles.Include( d => d.Domiciliary).ToList();
                IList<Domiciliary> domiciliaries =  context.Domiciliaries.Include(u => u.User).ToList();

                foreach (Vehicle vehicle in vehicles) {
                    foreach (Domiciliary domi in domiciliaries) {
                        if (vehicle.Domiciliary.Identification == domi.Identification) {
                            vehicle.Domiciliary = domi;
                            break;
                        }
                    }
                }
                
                return new VehicleConsultResponse(vehicles);

            } catch (Exception e) {
                return new VehicleConsultResponse($"Error del aplicacion: {e.Message}");
            }
        }
    }

    public class VehicleServiceResponse
    {
        public VehicleServiceResponse(Vehicle vehicle)
        {
            Error =  false;
            Vehicle = vehicle;
        }
        public VehicleServiceResponse(string message)
        {
            Error = true;
            Message = message;
        }

        public bool Error { get; set; }
        public string Message { get; set; }
        public Vehicle Vehicle { get; set; }
    }

    public class VehicleConsultResponse
    {
        public VehicleConsultResponse(IList<Vehicle> vehicles)
        {
            Error =  false;
            Vehicles = vehicles;
        }

        public VehicleConsultResponse(string message)
        {
            Error = true;
            Message = message;
        }

        public bool Error { get; set; }
        public string Message { get; set; }
        public IList<Vehicle> Vehicles { get; set; }
    }
}