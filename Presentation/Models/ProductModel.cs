using Entity;

namespace Presentation.Models
{
    public class ProductInputModel
    {
        public string  IdProduct { get; set; }
        public string  Title { get; set; }
        public float SalePrice { get; set; }
        public float SuggestedPrice { get; set; }
        public float PurchasePrice { get; set; }
        public float Quantity { get; set; }
        public int Iva { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        
    }

    public class ProductViewModel : ProductInputModel
    {
        public ProductViewModel()
        {
            
        }

        public ProductViewModel(Product product)
        {
            IdProduct = product.IdProduct;
            Title = product.Title;
            SalePrice = product.SalePrice;
            SuggestedPrice = product.SuggestedPrice;
            PurchasePrice = product.PurchasePrice;
            Quantity = product.Quantity;
            Iva = product.Iva;
            Image = product.Image;
            Description = product.Description;
            Category = product.Category;
        }
    }
}