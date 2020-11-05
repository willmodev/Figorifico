using System;
using System.Collections.Generic;
using System.Linq;
using DAL;
using Entity;
using Microsoft.EntityFrameworkCore;

namespace BLL
{
    public class ProductService
    {
        private readonly FigorificoContext context;
        public ProductService(FigorificoContext figorificoContext)
        {
            context = figorificoContext;    
        }

        public  ServiceResponse Save(Product product)
        {
            try{
                 context.Add(product);
                context.SaveChanges();
                return new ServiceResponse(product);
            }catch(Exception e)
            {
                return new ServiceResponse($"Error del aplicacion: {e.Message}");
            }
        }

        public ConsultResponse GetConsult()
        {
            try{
                IList<Product> products = context.Products.ToList();
                return new ConsultResponse(products);
            }
            catch(Exception e)
            {
                return new ConsultResponse($"Error de aplicacion: {e.Message}");
            }
        }

        public ServiceResponse Delete(string idProduct )
        {
            try
            {
                var productSearch = context.Products.Find(idProduct);
                if(productSearch != null)
                {
                    context.Products.Remove(productSearch);
                    context.SaveChanges();
                }

                return new ServiceResponse(productSearch);
            }
            catch (Exception e)
            {
                return new ServiceResponse($"Error de la Aplicación: {e.Message}");
            }
        }

        public ServiceResponse Modidy( Product newProduct)
        {
            try{
                var oldProduct = context.Products.Find(newProduct.IdProduct);
                if(oldProduct != null)
                {
                    oldProduct.IdProduct = newProduct.IdProduct;
                    oldProduct.Title = newProduct.Title;
                    oldProduct.SalePrice = newProduct.SalePrice;
                    oldProduct.PurchasePrice = newProduct.PurchasePrice;
                    oldProduct.SuggestedPrice = newProduct.SuggestedPrice;
                    oldProduct.Category = newProduct.Category;
                    oldProduct.Iva = newProduct.Iva;
                    oldProduct.Description = newProduct.Description;
                    oldProduct.Image  = newProduct.Image;
                    oldProduct.Quantity = newProduct.Quantity;
                    context.Products.Update(oldProduct);
                    context.SaveChanges();
                }
                return new ServiceResponse(newProduct);
            }
            catch (Exception e)
            {
                return new ServiceResponse($"Error de la Aplicación: {e.Message}");
            }
        }
    }

    public class ServiceResponse
    {
         public ServiceResponse(Product product)
        {
            Error = false;
            Product = product;
        }

        public ServiceResponse(string message)
        {
            Error = true;
            Message = message;
        }

        public bool Error { get; set; }
        public string Message { get; set; }
        public Product Product { get; set; }
    }

     public class ConsultResponse
    {
        public ConsultResponse(IList<Product> products)
        {
            Error =  false;
            Products = products;
        }

        public ConsultResponse(string message)
        {
            Error = true;
            Message = message;
            
        }

        public bool Error { get; set; }
        public string Message { get; set; }
        public IList<Product> Products { get; set; }
    }
}
