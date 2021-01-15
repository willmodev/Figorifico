using BLL;
using DAL;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Presentation.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class WInvoiceController: ControllerBase
    {
        private readonly InvoiceService invoiceService;

        public WInvoiceController(FigorificoContext figorificoContext)
        {
            this.invoiceService = new InvoiceService(figorificoContext);
        }

        [HttpGet]
        public ActionResult<decimal> Get() 
        {
            var response = invoiceService.Count();
            if (response.Error) return BadRequest(response.Message);

            decimal result = (++response.Count);

            return Ok(result);
        } 
    }
}