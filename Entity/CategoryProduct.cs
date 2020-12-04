using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class CategoryProduct
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdCategory { get; set; }
         [Column(TypeName= "nvarchar(30)")]
        public string Name { get; set; }
        [Column(TypeName= "nvarchar(3)")]
        [ForeignKey("IdType")]
        public TypeProduct TypeProduct { get; set; }
    }
}