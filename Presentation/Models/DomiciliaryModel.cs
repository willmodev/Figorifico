using System.ComponentModel.DataAnnotations;
using Entity;

namespace Presentation.Models
{
    public class DomiciliaryInputModel
    {
        [Required]
        [RegularExpression("(^[0-9]+$)", ErrorMessage = "Solo se permiten números")]
        [MinLength(10,ErrorMessage="El campo debe tener MINIMO 10 caracteres")]
        [StringLength(10,ErrorMessage="El campo debe tener MAXIMO 10 caracteres")]
        public string Identification { get; set; }
        [Required]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage="Solo se permiten letras")]
        [StringLength(30,ErrorMessage="El campo debe tener MAXIMO 30 caracteres")]
        public string Name { get; set; }
        [Required]
        [RegularExpression(@"^[a-zA-Z]+$", ErrorMessage="Solo se permiten letras")]
        [StringLength(30,ErrorMessage="El campo debe tener MAXIMO 30 caracteres")]
        public string LastName { get; set; }
        [Required]
        [StringLength(40,ErrorMessage="El campo debe tener MAXIMO 40 caracteres")]
        public string Address { get; set; }
        public UserInputModel User { get; set; }
    }

    public class DomiciliaryViewModel: DomiciliaryInputModel
    {
        public DomiciliaryViewModel()
        {
            
        }

        public DomiciliaryViewModel(Domiciliary domiciliary)
        {
            Identification = domiciliary.Identification;
            Name = domiciliary.Name;
            LastName = domiciliary.LastName;
            Address = domiciliary.Address;
            User = new UserInputModel();
            User = new UserViewModel(domiciliary.User);
        }
    }
}