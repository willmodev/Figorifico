using System.ComponentModel.DataAnnotations;
using System.Numerics;
using Entity;

namespace Presentation.Models
{
    public class VehicleInputModel
    {
        [Required]
        [StringLength(10,ErrorMessage="El campo debe tener MAXIMO 10 caracteres")]
        public string Placa { get; set; }
        [Required]
        [StringLength(20,ErrorMessage="El campo debe tener MAXIMO 20 caracteres")]
        public string Make { get; set; }
        [Required]
        [StringLength(5,ErrorMessage="El campo debe tener MAXIMO 5 caracteres")]
        [RegularExpression("(^[0-9]+$)", ErrorMessage = "Solo se permiten números")]
        public string Model { get; set; }
        public DomiciliaryInputModel Domiciliary { get; set; }

    }

    public class VehicleViewModel: VehicleInputModel
    {
        public VehicleViewModel()
        {
            
        }
        public VehicleViewModel(Vehicle vehicle)
        {
            Placa = vehicle.Placa;
            Make = vehicle.Make;
            Model = vehicle.Model;
            Domiciliary = new DomiciliaryInputModel();
            Domiciliary = new DomiciliaryViewModel(vehicle.Domiciliary);
        }

    }
}