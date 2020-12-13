using Entity;
using System.ComponentModel.DataAnnotations;

namespace Presentation.Models
{
    public class ClientInputModel
    {
        [Required]
        [MinLength(10,ErrorMessage="el campo debe tener minimo 10 caracteres")]
        public string Indentification { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        [StringLength(10,ErrorMessage="No digitar Mas de 10 caracteres")]
        public string Phone { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string Neighborhood { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
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