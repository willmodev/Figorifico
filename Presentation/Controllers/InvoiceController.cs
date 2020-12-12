using System.Collections.Generic;
using System.Linq;
using BLL;
using DAL;
using Entity;
using Microsoft.AspNetCore.Mvc;
using Presentation.Models;

namespace Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InvoiceController: ControllerBase
    {
        private readonly InvoiceService invoiceService;

        public InvoiceController(FigorificoContext figorificoContext)
        {
            this.invoiceService = new InvoiceService(figorificoContext);
        }

        [HttpPost]
        public ActionResult<InvoiceViewModel> Post(InvoiceImputModel invoiceImput)
        {
            Invoice invoice =  Map(invoiceImput);

            var response =  invoiceService.Save(invoice);
            if (response.Error) {
                return BadRequest(response.Message);
            }
            return Ok(response.Invoice);
        }

        private Invoice Map(InvoiceImputModel invoiceImput)
        {
            var invoice = new Invoice();

            invoice.IdInvoice = invoiceImput.IdInvoice;
            invoice.Subtotal = invoiceImput.Subtotal;
            invoice.TotalIva = invoiceImput.TotalIva;
            invoice.Total = invoiceImput.Total;
            invoice.PaymentMethod = invoiceImput.PaymentMethod;
            invoice.SaleDate = invoiceImput.SaleDate;
            invoice.DueDate = invoiceImput.DueDate;
            invoice.IdClient = invoiceImput.IdClient;

            foreach (InvoiceDetailModel detailModel in invoiceImput.InvoiceDetails) {

                InvoiceDetail detail =  new InvoiceDetail();

                detail.IdDetail = detailModel.IdDetail;
                detail.UnitValue =detailModel.UnitValue;
                detail.Quantity = detailModel.Quantity;
                detail.Discount = detailModel.Discount;
                detail.TolalDetail =detailModel.TolalDetail;
                detail.IdInvoice = detailModel.IdInvoice;
                detail.IdProduct = detailModel.IdProduct;

                // detail.Product  = new  Product();
                // detail.Product = MapProduct(detailModel.Product);
                invoice.InvoiceDetails.Add(detail);
            }

            return invoice;
        }

        [HttpGet("{idInvoice}")]
        public ActionResult<InvoiceViewModel> GetInvoice(string idInvoice)
        {
            var response =  invoiceService.GetInvoice(idInvoice);
            if(response.Invoice == null) return NotFound("Factura no encontrada!");
            var i =  new InvoiceViewModel(response.Invoice);

            return Ok(i);
        }

        [HttpGet]
        public ActionResult<IEnumerable<InvoiceViewModel>> Get()
        {
            var response = invoiceService.GetList();

            if (response.Invoices == null) return BadRequest(response.Message);

            var invoices = response.Invoices.Select(i => new InvoiceViewModel(i));

            return Ok(invoices);

        }

        private Product MapProduct(ProductInputModel productInput)
        {
            Product product  = new Product();

            product.IdProduct = productInput.IdProduct;
            product.Type = productInput.Type;
            product.SalePrice = productInput.SalePrice;
            product.PurchasePrice = productInput.PurchasePrice;
            product.Quantity = productInput.Quantity;
            product.Iva = productInput.Iva;
            product.Image = productInput.Image;
            product.Description = productInput.Description;
            product.Category = productInput.Category;

            return product;
        }

        
    }
}