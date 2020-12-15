using System.ComponentModel.DataAnnotations;
using Entity;

namespace Presentation.Models
{
    public class UserInputModel
    {
        [Required]
        [StringLength(10,ErrorMessage="El campo debe tener MAXIMO 10 caracteres")]
        [MinLength(3,ErrorMessage="El campo debe tener MINIMO 3 caracteres")]
        public string UserName { get; set; }
        [Required]
        [StringLength(10,ErrorMessage="El campo debe tener MAXIMO 10 caracteres")]
        [MinLength(3,ErrorMessage="El campo debe tener MINIMO 6 caracteres")]
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