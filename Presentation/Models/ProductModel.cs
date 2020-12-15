using System;
using System.ComponentModel.DataAnnotations;
using Entity;

namespace Presentation.Models
{
    public class ProductInputModel
    {
        [Required]
        [MinLength(4,ErrorMessage="El codigo debe tener 4 caracteres")]
        [StringLength(4,ErrorMessage="El codigo debe tener 4 caracteres")]
        public string  IdProduct { get; set; }
        [Required]
        public string  Type { get; set; }
        [Required]
        [Range(1,99999999, ErrorMessage="Digite un precio de venta entre el rangoo de 1 a 99999999 años")]
        public decimal SalePrice { get; set; }
        [Required]
        [Range(1,99999999, ErrorMessage="Digite un precio de compra entre el rango de 1 a 99999999 años")]
        public decimal PurchasePrice { get; set; }
        [Required]
        [Range(1,999,  ErrorMessage = "Digite una cantidas entre el rango de 1 y 999")]
        public float Quantity { get; set; }
        [Required]
        [Range(0,100,  ErrorMessage = "Digite una cantidas entre el rango de 0 y 100")]
        public int Iva { get; set; }
        [Required]
        public string Image { get; set; }
        [Required]
        public string Description { get; set; }
        [Required]
        public string Category { get; set; }

        public ProductInputModel()
        {
            
        }
        
    }

    public class ProductViewModel : ProductInputModel
    {
        public ProductViewModel()
        {
            
        }

        public ProductViewModel(Product product)
        {
            IdProduct = product.IdProduct;
            Type = product.Type;
            SalePrice = product.SalePrice;
            PurchasePrice = product.PurchasePrice;
            Quantity = product.Quantity;
            Iva = product.Iva;
            Image = product.Image;
            Description = product.Description;
            Category = product.Category;
        }
    }
}