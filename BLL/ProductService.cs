using System;
using DAL;
using Entity;

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
}
