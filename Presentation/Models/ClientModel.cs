using Entity;

namespace Presentation.Models
{
    public class ClientInputModel
    {
        public string Indentification { get; set; }
        public string Name { get; set; }
        public string LastName { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string Neighborhood { get; set; }
        public string City { get; set; }
        public string Department { get; set; }
    }

    public class ClientViewModel: ClientInputModel
    {
        public ClientViewModel()
        {
            
        }

        public ClientViewModel(Client client)
        {
            Indentification = client.Indentification;
            Name = client.Name;
            LastName = client.LastName;
            Phone = client.Phone;
            Address = client.Address;
            Neighborhood = client.Neighborhood;
            City = client.City;
            Department = client.Department;
        }
    }
}