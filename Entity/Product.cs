using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public class Product
    {
        [Key]
        [Column(TypeName= "nvarchar(10)")]
        public string  IdProduct { get; set; }
        [Column(TypeName= "nvarchar(30)")]
        public string  Type { get; set; }
        [Column(TypeName= "nvarchar(11)")]
        public float SalePrice { get; set; }
        public float SuggestedPrice { get; set; }
        public float PurchasePrice { get; set; }
        public float Quantity { get; set; }
        public int Iva { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
        [Column(TypeName= "nvarchar(15)")]
        public string Category { get; set; }

    }
}
