using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class TypeProduct
    {
        [Key]
        [Column(TypeName= "nvarchar(3)")]
        public string IdType { get; set; }
        [Column(TypeName= "nvarchar(30)")]
        public string  Name { get; set; }
    }
}