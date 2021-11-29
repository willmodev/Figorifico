using System.ComponentModel.DataAnnotations;
using Entity;

namespace Presentation.Models
{
    public class UserInputModel
    {
        [Required]
        [MinLength(3, ErrorMessage = "El campo debe tener MINIMO 3 caracteres")]
        [StringLength(15, ErrorMessage = "El campo debe tener MAXIMO 15 caracteres")]
        [RegularExpression(@"^[a-zA-Z0-9]+$", ErrorMessage = "El campo NO permite espacios entre caracteres y/o caracteres especiales")]
        public string UserName { get; set; }
        [Required]
        [MinLength(8,ErrorMessage="El campo debe tener MINIMO 8 caracteres")]
        [StringLength(30,ErrorMessage="El campo debe tener MAXIMO 30 caracteres")]
        public string Password { get; set; }
        [Required]
        public string Status { get; set; }
        [Required]
        public string Role { get; set; }
    }

    public class UserViewModel: UserInputModel
    {
        public UserViewModel()
        {
            
        }
        public UserViewModel(User user)
        {
            UserName = user.UserName;
            Password = user.Password;
            Status = user.Status;
            Role = user.Role;
        }
    }
}