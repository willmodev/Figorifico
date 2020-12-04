using Entity;

namespace Presentation.Models
{
    public class TypeModel
    {
        public int IdType { get; set; }
        public string Name { get; set; } 
    }

    public class CategoryImputModel
    {
        public int IdCategory { get; set; }
        public string Name { get; set; }
        public TypeModel TypeProduct { get; set; }     
    }

    public class CategoryViewModel : CategoryImputModel {
        public CategoryViewModel() { 
            
        }
        public CategoryViewModel(CategoryProduct category) { 

            IdCategory = category.IdCategory;
            Name = category.Name;
            TypeProduct = new TypeModel();
            TypeProduct.IdType =  category.TypeProduct.IdType;
            TypeProduct.Name =  category.TypeProduct.Name;
        }
    }
}
   
