using Microsoft.EntityFrameworkCore.Migrations;

namespace DAL.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    IdProduct = table.Column<string>(type: "nvarchar(10)", nullable: false),
                    Title = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    SalePrice = table.Column<string>(type: "nvarchar(11)", nullable: false),
                    SuggestedPrice = table.Column<float>(nullable: false),
                    PurchasePrice = table.Column<float>(nullable: false),
                    Quantity = table.Column<float>(nullable: false),
                    Iva = table.Column<int>(nullable: false),
                    Image = table.Column<string>(nullable: true),
                    Description = table.Column<string>(nullable: true),
                    Category = table.Column<string>(type: "nvarchar(15)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.IdProduct);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
