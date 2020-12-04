using System;
using DAL;
using Entity;

namespace BLL
{
    public class InvoiceService
    {
        private readonly FigorificoContext context;

        public InvoiceService(FigorificoContext figorificoContext)
        {
            context = figorificoContext;
        }

        public InvoiceServiceResponse Save(Invoice invoice)
        {
            try {
                context.Add(invoice);
                context.SaveChanges();
                return new InvoiceServiceResponse(invoice);
            } catch (Exception e) {
                return new InvoiceServiceResponse($"Error del aplicacion: {e.Message}");
            }
        }
    }

    public class InvoiceServiceResponse
    {

         public InvoiceServiceResponse(Invoice invoice)
        {
            Error =  false;
            Invoice = invoice;
        }

        public InvoiceServiceResponse(string message)
        {
            Error = true;
            Message = message;
        }


       public bool Error { get; set; }
       public string Message { get; set; }
       public Invoice Invoice { get; set; }
    }
   
}