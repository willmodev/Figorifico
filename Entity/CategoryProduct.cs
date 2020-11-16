using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class CategoryProduct
    {
        [Key]
         [Column(TypeName= "nvarchar(3)")]
        public string IdCategory { get; set; }
         [Column(TypeName= "nvarchar(30)")]
        public string Name { get; set; }
         [Column("IdType",TypeName= "nvarchar(3)")]
        public TypeProduct TypeProduct { get; set; }
    }
}