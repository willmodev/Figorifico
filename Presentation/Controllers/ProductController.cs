using BLL;
using DAL;
using Entity;
using Microsoft.AspNetCore.Mvc;
using Presentation.Models;
using System.Collections.Generic;
using System.Linq;

namespace Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class ProductController: ControllerBase
    {
        private readonly ProductService productService;

        public ProductController(FigorificoContext figorificoContext)
        {
            this.productService = new ProductService(figorificoContext);
        }

        [HttpPost]
        public ActionResult<ProductViewModel> Post(ProductInputModel productInput)
        {
           Product product  = Map(productInput);
           var response = productService.Save(product);

           if(response.Error)
           {
              return  BadRequest(response.Message);
           }
           return  Ok(response.Product);
        }

        private Product Map(ProductInputModel productInput)
        {
            Product product  = new Product();

            product.IdProduct = productInput.IdProduct;
            product.Type = productInput.Type;
            product.SalePrice = productInput.SalePrice;
            product.SuggestedPrice = productInput.SuggestedPrice;
            product.PurchasePrice = productInput.PurchasePrice;
            product.Quantity = productInput.Quantity;
            product.Iva = productInput.Iva;
            product.Image = productInput.Image;
            product.Description = productInput.Description;
            product.Category = productInput.Category;

            return product;
        }

        [HttpGet]
        public ActionResult<IEnumerable<ProductViewModel>> GetProducts()
        {
            var response =  productService.GetConsult();

            if(response.Products == null)
            {
                return BadRequest(response.Message);
            }

            var products = response.Products.Select(p => new ProductViewModel(p));
           
            return  Ok(products);
        }

        [HttpDelete("{idProduct}")]
        public ActionResult<ProductViewModel> Delete(string idProduct)
        {
            var response = productService.Delete(idProduct);
            if(response.Product == null) return BadRequest(response.Message);
            return Ok(response.Product);
        }

        [HttpPut]
        public ActionResult<ProductViewModel> Modify(ProductInputModel productInput)
        {
            Product product = Map(productInput);
            var response = productService.Modidy(product);
            if(response.Error) return BadRequest(response.Message);
            return Ok(response.Product);
        }


     
    }
}