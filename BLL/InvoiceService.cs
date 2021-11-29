using System.ComponentModel;
using System;
using System.Linq;
using DAL;
using Entity;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

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
        public InvoiceServiceResponse GetInvoice(string idInvoice)
        {
           
            try {
                Invoice invoice = context.Invoices.Where(i => i.IdInvoice == idInvoice)
                                                .Include(c => c.Client)
                                                .Include(d => d.InvoiceDetails)
                                                .FirstOrDefault();
                Client client = context.Clients.Include(u => u.User)
                            .Where(c => c.Indentification == invoice.Client.Indentification).FirstOrDefault();
                invoice.Client = client;

               IList<InvoiceDetail> details = context.InvoiceDetails.Include(p => p.Product)
                                                .Where(de => de.InvoiceIdInvoice == idInvoice).ToList();
                                
                invoice.InvoiceDetails = details;                                                    
                return new InvoiceServiceResponse(invoice);
            }
            catch (Exception e)
            {
                return new InvoiceServiceResponse($"Error de la Aplicacion: {e.Message}");
            }
        }

        public ListInvioceResponse GetList()
        {
            try {
                    var invoices = context.Invoices.ToList();
                    var clients = context.Clients.ToList();
                    var details = context.InvoiceDetails.ToList();
                    var products = context.Products.ToList();

                    foreach (Invoice invoice1 in invoices)
                    {
                        foreach (Client client in clients)
                        {
                            if (invoice1.IdClient == client.Indentification)
                            {
                                invoice1.Client = client;
                                break;
                            }
                        }
                    }

                    foreach (InvoiceDetail detail in details)
                    {
                        foreach (Product product in products)
                        {
                            if (detail.IdProduct == product.IdProduct)
                            {
                                detail.Product = product;
                                break;
                            }
                        }
                    }

                    foreach (Invoice invoice in invoices)
                    {
                        foreach (InvoiceDetail detail in details)
                        {
                            if (invoice.IdInvoice == detail.InvoiceIdInvoice)
                            {
                                invoice.InvoiceDetails.Add(detail);
                            }
                        }

                    }

                    return new ListInvioceResponse(invoices);

            } catch (Exception e ) {
                return new ListInvioceResponse($"Error del aplicacion: {e.Message}");
            }
        }

        public ResponseCount Count()
        {
            try {
                decimal count =  context.Invoices.Count();
                return new ResponseCount(count);
            } catch (Exception e) {
                return new ResponseCount($"Error del aplicacion: {e.Message}");
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

    public class ResponseCount
    {
        public ResponseCount(decimal count)
        {
            Error = false;
            Count = count;
        }

        public ResponseCount(string message)
        {
            Error = true;
            Message = message;
        }

        public bool Error { get; set; }
        public string Message { get; set; }
        public decimal Count { get; set; }
        
        
        
        
        
        

    }

    public class ListInvioceResponse
    {

        public ListInvioceResponse(IList<Invoice> invoices)
        {
            Error = false;
            Invoices = invoices;
        }

        public ListInvioceResponse(string message)
        {
            Error = true;
            Message = message;
        }

        public bool Error { get; set; }
        public string Message { get; set; }
        public IList<Invoice> Invoices { get; set; }

        
    }

}