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
