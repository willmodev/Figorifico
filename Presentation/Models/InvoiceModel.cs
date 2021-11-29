

using System.Collections.Generic;
using Entity;

namespace Presentation.Models
{
    public class InvoiceDetailModel
    {
        public int IdDetail { get; set; }
        public decimal UnitValue { get; set; }
        public float Quantity { get; set; }
        public float Discount { get; set; }
        public decimal TolalDetail { get; set; }
        public string IdInvoice{ get; set; }
        public string IdProduct{ get; set; }
        public  ProductInputModel Product { get; set; }

        public InvoiceDetailModel()
        {
            
        }
    }

    public class InvoiceImputModel
    {
        public string IdInvoice{ get; set; }
        public decimal Subtotal { get; set; }
        public decimal TotalIva { get; set; }
        public decimal Total { get; set; }
        public string SaleDate { get; set; }
        public string DueDate { get; set; }
        public string PaymentMethod { get; set; }
        public string  IdClient { get; set; }
        public  ClientInputModel Client { get; set; }
        public  IList<InvoiceDetailModel> InvoiceDetails { get; set; } 

        public InvoiceImputModel()
        {
            this.InvoiceDetails = new List<InvoiceDetailModel>();
        }
    }

    public class InvoiceViewModel: InvoiceImputModel
    {
        public InvoiceViewModel()
        {
            
        }

        public InvoiceViewModel(Invoice invoice)
        {
            IdInvoice = invoice.IdInvoice;
            Subtotal = invoice.Subtotal;
            TotalIva = invoice.TotalIva;
            Total = invoice.Total;
            PaymentMethod = invoice.PaymentMethod;
            SaleDate = invoice.SaleDate;
            DueDate = invoice.DueDate;
            IdClient = invoice.IdClient;
            Client = new ClientInputModel();
            Client = new ClientViewModel(invoice.Client);



            foreach (InvoiceDetail detail in invoice.InvoiceDetails) {

                InvoiceDetailModel detailModel =  new InvoiceDetailModel();

                detailModel.IdDetail = detail.IdDetail;
                detailModel.UnitValue = detail.UnitValue;
                detailModel.Quantity = detail.Quantity;
                detailModel.Discount = detail.Discount;
                detailModel.TolalDetail = detail.TolalDetail;
                detailModel.IdInvoice  = detail.InvoiceIdInvoice;
                detailModel.IdProduct  = detail.IdProduct;

                detailModel.Product = new ProductInputModel();
                detailModel.Product  = new ProductViewModel(detail.Product);
                InvoiceDetails.Add(detailModel);
            }

        }

    }
}