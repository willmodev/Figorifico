using System;
using System.Collections.Generic;
using System.Linq;
using DAL;
using Entity;
using Microsoft.EntityFrameworkCore;

namespace BLL
{
    public class CategoryService
    {
        private readonly FigorificoContext context;
        public CategoryService(FigorificoContext figorificoContext)
        {
            context = figorificoContext;    
        }

        public ConsultResponseCategory GetConsult()
        {
            try
            {
                IList<CategoryProduct> categorys = context.Categorys.Include(t => t.TypeProduct).ToList();
                return new ConsultResponseCategory(categorys);
            }catch (Exception e)
            {
                return new ConsultResponseCategory($"Error de aplicacion: {e.Message}");
            }
        }


    }

    public class ConsultResponseCategory
    {
        public ConsultResponseCategory(IList<CategoryProduct> categorys)
        {
            Error =  false;
            Categorys = categorys;
        }

        public ConsultResponseCategory(string message)
        {
            Error = true;
            Message = message;
            
        }

        public bool Error { get; set; }
        public string Message { get; set; }
        public IList<CategoryProduct> Categorys { get; set; }
    }
}