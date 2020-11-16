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
                    Type = table.Column<string>(type: "nvarchar(30)", nullable: true),
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

            migrationBuilder.CreateTable(
                name: "TypeProduct",
                columns: table => new
                {
                    IdType = table.Column<string>(type: "nvarchar(3)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(30)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TypeProduct", x => x.IdType);
                });

            migrationBuilder.CreateTable(
                name: "Categorys",
                columns: table => new
                {
                    IdCategory = table.Column<string>(type: "nvarchar(3)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    TypeProductIdType = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categorys", x => x.IdCategory);
                    table.ForeignKey(
                        name: "FK_Categorys_TypeProduct_TypeProductIdType",
                        column: x => x.TypeProductIdType,
                        principalTable: "TypeProduct",
                        principalColumn: "IdType",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Categorys_TypeProductIdType",
                table: "Categorys",
                column: "TypeProductIdType");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Categorys");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "TypeProduct");
        }
    }
}
