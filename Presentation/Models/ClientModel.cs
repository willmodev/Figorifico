using System.IO;
using Entity;
using System.ComponentModel.DataAnnotations;

namespace Presentation.Models
{
    public class ClientInputModel
    {
        [Required]
        [RegularExpression("(^[0-9]+$)", ErrorMessage = "Solo se permiten números")]
        [StringLength(10,ErrorMessage="El campo debe tener 10 digitos")]
        public string Indentification { get; set; }
        [Required]
        [MinLength(1, ErrorMessage = "El campo debe tener MINIMO 1 caracteres")]
        [StringLength(30,ErrorMessage="El campo debe tener MAXIMO 30 caracteres")]
        [RegularExpression(@"^[a-zA-Z ]+$", ErrorMessage= "El campo NO permite numeros y/o caracteres especiales")]
        public string Name { get; set; }
        [Required]
        [MinLength(1, ErrorMessage = "El campo debe tener MINIMO 1 caracteres")]
        [StringLength(30, ErrorMessage = "El campo debe tener MAXIMO 30 caracteres")]
        [RegularExpression(@"^[a-zA-Z ]+$", ErrorMessage= "El campo NO permite numeros y/o caracteres especiales")]
        public string LastName { get; set; }
        [Required]
        [StringLength(10, ErrorMessage = "El campo debe tener 10 digitos")]
        [RegularExpression(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$", ErrorMessage = "Formato del telefono es invalido")]
        public string Phone { get; set; }
        [Required]
        [MinLength(1, ErrorMessage = "El campo debe tener MINIMO 1 caracteres")]
        [StringLength(30, ErrorMessage = "El campo debe tener MAXIMO 30 caracteres")]
        public string Address { get; set; }
        [Required]
        [MinLength(1, ErrorMessage = "El campo debe tener MINIMO 1 caracteres")]
        [StringLength(30, ErrorMessage = "El campo debe tener MAXIMO 30 caracteres")]
        [RegularExpression("(^[a-zA-Z0-9 ]+$)", ErrorMessage = "'El campo NO permite caracteres especiales")]
        public string Neighborhood { get; set; }
        [Required]
        [MinLength(1, ErrorMessage = "El campo debe tener MINIMO 1 caracteres")]
        [StringLength(50, ErrorMessage = "El campo debe tener MAXIMO 50 caracteres")]
        [RegularExpression(@"^[a-zA-Z ]+$", ErrorMessage= "El campo NO permite numeros y/o caracteres especiales")]
        public string City { get; set; }
        [Required]
        [MinLength(1, ErrorMessage = "El campo debe tener MINIMO 1 caracteres")]
        [StringLength(50, ErrorMessage = "El campo debe tener MAXIMO 50 caracteres")]
        [RegularExpression(@"^[a-zA-Z ]+$", ErrorMessage = "El campo NO permite numeros y/o caracteres especiales")]
        public string Department { get; set; }
        public UserInputModel User { get; set; }
        
        
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
            User = new UserInputModel();
            if (client.User != null) { User = new UserViewModel(client.User); }
                
        }
    }
}