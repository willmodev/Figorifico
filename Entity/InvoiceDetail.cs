using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entity
{
    public partial class InvoiceDetail
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int IdDetail { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal UnitValue { get; set; }
        public float Quantity { get; set; }
        public float Discount { get; set; }
        [Column(TypeName = "decimal(18,2)")]
        public decimal TolalDetail { get; set; }
        [Column(TypeName = "nvarchar(10)")]
        public string IdProduct { get; set; }

        [NotMapped]
        public string InvoiceIdInvoice { get; set; }
        [NotMapped]
        public Product Product { get; set; }

        public InvoiceDetail()
        {
            
        }

        public InvoiceDetail(Product product, float quantity, float discount, decimal price)
        {
            IdProduct = product.IdProduct;
            Product = product;
            UnitValue = price;
            Quantity = quantity;
            Discount = discount;
            CalculateTotalDetail();
            CalculateIva();
        }

        public void CalculateTotalDetail()
        {
            
            TolalDetail = Decimal.Round((((decimal)Quantity) * Product.SalePrice) * (1 - ((decimal)Discount/100)), 1);
        }


        public decimal CalculateIva()
        {
            return TolalDetail * (Product.Iva  / 100) ;
        }
    }
}