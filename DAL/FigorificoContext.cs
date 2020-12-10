using Entity;
using Microsoft.EntityFrameworkCore;
namespace DAL
{
    public class FigorificoContext: DbContext
    {
        public FigorificoContext(DbContextOptions options): base(options) {}

        public DbSet<Product> Products { get; set; }
        public DbSet<CategoryProduct> Categorys { get;  set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<Invoice> Invoices { get; set; }
        public DbSet<InvoiceDetail> InvoiceDetails { get; set; }
        public DbSet<User> Users { get; set; }

        // protected override void OnModelCreating(ModelBuilder modelBuilder)
        // {
        //     modelBuilder.Entity<Invoice>()
        //     .HasOne<Client>()
        //     .WithMany()
        //     .HasForeignKey(p => p.IdClient);

        // }
        
        
    }
}