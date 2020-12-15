using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class Vehicle
    {
        [Key]
        [Column(TypeName= "nvarchar(11)")]
        public string Placa { get; set; }
        [Column(TypeName= "nvarchar(20)")]
        public string Make { get; set; }
        [Column(TypeName= "nvarchar(5)")]
        public string Model { get; set; }
        [Column(TypeName= "nvarchar(11)")]
        [ForeignKey("Identification")]
        public Domiciliary Domiciliary { get; set; }
    }
}