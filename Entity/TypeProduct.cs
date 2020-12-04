using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class TypeProduct
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int IdType { get; set; }
        [Column(TypeName= "nvarchar(30)")]
        public string  Name { get; set; }
    }
}