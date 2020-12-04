using System;
using System.Collections.Generic;
using System.Linq;
using DAL;
using Entity;

namespace BLL
{
    public class ClientService
    {
        private readonly FigorificoContext context;

        public ClientService(FigorificoContext figorificoContext)
        {
            context = figorificoContext;
        }

        public ClientServiceResponse Save(Client client)
        {
            try {
                context.Add(client);
                context.SaveChanges();
                return new ClientServiceResponse(client);
            } catch (Exception e) {

                return new ClientServiceResponse($"Error del aplicacion: {e.Message}");
            }
        }
        public ClientServiceResponse SearchById(string identification)
        {
            try 
            {
                Client client = context.Clients.Find(identification);
                return new ClientServiceResponse(client);
            }
            catch (Exception e)
            {
                
                return new ClientServiceResponse($"Error de la Aplicacion: {e.Message}");
            }
        }

        public ClientsConsultResponse GetConsult()
        {
            try {
                IList<Client> clients = context.Clients.ToList();
                return new ClientsConsultResponse(clients);
            } catch (Exception e) {
                return new ClientsConsultResponse($"Error del aplicacion: {e.Message}");
            }
        }

        public ClientServiceResponse Delete(string identification)
        {
            try {
                var clientSearch = context.Clients.Find(identification);
                if (clientSearch != null) {
                    context.Clients.Remove(clientSearch);
                    context.SaveChanges();
                }

                return new ClientServiceResponse(clientSearch);
            } catch (Exception e) {
                return new ClientServiceResponse($"Error del aplicacion: {e.Message}");
            }
        }

        public ClientServiceResponse Modify(Client newClient)
        {
            try {
                var oldClient =  context.Clients.Find(newClient.Indentification);

                if (oldClient != null)
                {
                    oldClient.Indentification =  newClient.Indentification;
                    oldClient.Name = newClient.Name;
                    oldClient.LastName = newClient.LastName;
                    oldClient.Phone =  newClient.Phone;
                    oldClient.Address = newClient.Address;
                    oldClient.Neighborhood = newClient.Neighborhood;
                    oldClient.City = newClient.City;
                    oldClient.Department =  newClient.Department;

                    context.Clients.Update(oldClient);
                    context.SaveChanges();
                }
                

                return new ClientServiceResponse(newClient);
            } catch (Exception e ) {
                return new ClientServiceResponse($"Error del aplicacion: {e.Message}");
            }
        }


    }

    public class ClientServiceResponse
    {
        public ClientServiceResponse(Client client)
        {
            Error =  false;
            Client = client;
        }

        public ClientServiceResponse(string message)
        {
            Error = true;
            Message = message;
        }
       

       public bool Error { get; set; }
       public string Message { get; set; }
       public Client Client { get; set; }
       
       
    }

    public class ClientsConsultResponse
    {
        public ClientsConsultResponse(IList<Client> clients)
        {
            Error =  false;
            Clients = clients;
        }

        public ClientsConsultResponse(string message)
        {
            Error = true;
            Message = message;
        }

        public bool Error { get; set; }
        public string Message { get; set; }
        public IList<Client> Clients { get; set; }
    }
}