using BLL;
using DAL;
using Entity;
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

        [HttpPost]
        public ActionResult<CategoryViewModel> Post(CategoryImputModel categoryInput)
        {
            CategoryProduct category  = Map(categoryInput);
            var response = categoryService.Save(category);
            if(response.Error)
            {
                return BadRequest(response.Message);
            }
            return Ok(response.Category);
        }

        private CategoryProduct Map(CategoryImputModel categoryInput)
        {
            var category = new CategoryProduct();

            category.IdCategory = categoryInput.IdCategory;
            category.Name = categoryInput.Name;

            category.TypeProduct = new TypeProduct();
            category.TypeProduct.IdType =  categoryInput.TypeProduct.IdType;
            category.TypeProduct.Name =  categoryInput.TypeProduct.Name;

            return category;
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