using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class Domiciliary
    {
        [Key]
        [Column(TypeName= "nvarchar(11)")]
        public string Identification { get; set; }
        [Column(TypeName= "nvarchar(30)")]
        public string Name { get; set; }
        [Column(TypeName= "nvarchar(30)")]
        public string LastName { get; set; }
        [Column(TypeName= "nvarchar(40)")]
        public string Address { get; set; }
        [Column(TypeName= "nvarchar(30)")]
        public virtual User User { get; set; }
        
        
        
        
    }
}