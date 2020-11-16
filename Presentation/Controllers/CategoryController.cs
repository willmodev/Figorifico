using BLL;
using DAL;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using Presentation.Models;

namespace Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class CategoryController: ControllerBase
    {
        private readonly CategoryService categoryService;
         public CategoryController(FigorificoContext figorificoContext)
        {
            this.categoryService = new CategoryService(figorificoContext);
        }

        [HttpGet]
        public ActionResult<IEnumerable<CategoryViewModel>> GetProducts()
        {
            var response =  categoryService.GetConsult();

            if(response.Categorys == null)
            {
                BadRequest(response.Message);
            }

            var categorys = response.Categorys.Select(c => new CategoryViewModel(c));
           
            return  Ok(categorys);
        }
    }
}