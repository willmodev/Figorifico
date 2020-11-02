using Entity;
using Microsoft.EntityFrameworkCore;
namespace DAL
{
    public class FigorificoContext: DbContext
    {
        public FigorificoContext(DbContextOptions options): base(options) {}

        public DbSet<Product> Products { get; set; }
        
    }
}