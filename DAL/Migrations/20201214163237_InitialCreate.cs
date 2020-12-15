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
                    SalePrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    PurchasePrice = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
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
                    IdType = table.Column<int>(nullable: false),
                    Name = table.Column<string>(type: "nvarchar(30)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TypeProduct", x => x.IdType);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserName = table.Column<string>(type: "nvarchar(30)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    Status = table.Column<string>(type: "nvarchar(15)", nullable: true),
                    Role = table.Column<string>(type: "nvarchar(15)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserName);
                });

            migrationBuilder.CreateTable(
                name: "Categorys",
                columns: table => new
                {
                    IdCategory = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    IdType = table.Column<int>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categorys", x => x.IdCategory);
                    table.ForeignKey(
                        name: "FK_Categorys_TypeProduct_IdType",
                        column: x => x.IdType,
                        principalTable: "TypeProduct",
                        principalColumn: "IdType",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Clients",
                columns: table => new
                {
                    Indentification = table.Column<string>(type: "nvarchar(11)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(130)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    Phone = table.Column<string>(type: "nvarchar(11)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(50)", nullable: true),
                    Neighborhood = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    City = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    Department = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    UserName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clients", x => x.Indentification);
                    table.ForeignKey(
                        name: "FK_Clients_Users_UserName",
                        column: x => x.UserName,
                        principalTable: "Users",
                        principalColumn: "UserName",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Domiciliaries",
                columns: table => new
                {
                    Identification = table.Column<string>(type: "nvarchar(11)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(40)", nullable: true),
                    UserName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Domiciliaries", x => x.Identification);
                    table.ForeignKey(
                        name: "FK_Domiciliaries_Users_UserName",
                        column: x => x.UserName,
                        principalTable: "Users",
                        principalColumn: "UserName",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Invoices",
                columns: table => new
                {
                    IdInvoice = table.Column<string>(type: "nvarchar(4)", nullable: false),
                    Subtotal = table.Column<decimal>(nullable: false),
                    TotalIva = table.Column<decimal>(nullable: false),
                    Total = table.Column<decimal>(nullable: false),
                    PaymentMethod = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    SaleDate = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    DueDate = table.Column<string>(type: "nvarchar(30)", nullable: true),
                    IdClient = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Invoices", x => x.IdInvoice);
                    table.ForeignKey(
                        name: "FK_Invoices_Clients_IdClient",
                        column: x => x.IdClient,
                        principalTable: "Clients",
                        principalColumn: "Indentification",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "Vehicles",
                columns: table => new
                {
                    Placa = table.Column<string>(type: "nvarchar(11)", nullable: false),
                    Make = table.Column<string>(type: "nvarchar(20)", nullable: true),
                    Model = table.Column<string>(type: "nvarchar(5)", nullable: true),
                    Identification = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vehicles", x => x.Placa);
                    table.ForeignKey(
                        name: "FK_Vehicles_Domiciliaries_Identification",
                        column: x => x.Identification,
                        principalTable: "Domiciliaries",
                        principalColumn: "Identification",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "InvoiceDetails",
                columns: table => new
                {
                    IdDetail = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UnitValue = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Quantity = table.Column<float>(nullable: false),
                    Discount = table.Column<float>(nullable: false),
                    TolalDetail = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    IdInvoice = table.Column<string>(nullable: true),
                    IdProduct = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InvoiceDetails", x => x.IdDetail);
                    table.ForeignKey(
                        name: "FK_InvoiceDetails_Invoices_IdInvoice",
                        column: x => x.IdInvoice,
                        principalTable: "Invoices",
                        principalColumn: "IdInvoice",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_InvoiceDetails_Products_IdProduct",
                        column: x => x.IdProduct,
                        principalTable: "Products",
                        principalColumn: "IdProduct",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Categorys_IdType",
                table: "Categorys",
                column: "IdType");

            migrationBuilder.CreateIndex(
                name: "IX_Clients_UserName",
                table: "Clients",
                column: "UserName");

            migrationBuilder.CreateIndex(
                name: "IX_Domiciliaries_UserName",
                table: "Domiciliaries",
                column: "UserName");

            migrationBuilder.CreateIndex(
                name: "IX_InvoiceDetails_IdInvoice",
                table: "InvoiceDetails",
                column: "IdInvoice");

            migrationBuilder.CreateIndex(
                name: "IX_InvoiceDetails_IdProduct",
                table: "InvoiceDetails",
                column: "IdProduct");

            migrationBuilder.CreateIndex(
                name: "IX_Invoices_IdClient",
                table: "Invoices",
                column: "IdClient");

            migrationBuilder.CreateIndex(
                name: "IX_Vehicles_Identification",
                table: "Vehicles",
                column: "Identification");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Categorys");

            migrationBuilder.DropTable(
                name: "InvoiceDetails");

            migrationBuilder.DropTable(
                name: "Vehicles");

            migrationBuilder.DropTable(
                name: "TypeProduct");

            migrationBuilder.DropTable(
                name: "Invoices");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "Domiciliaries");

            migrationBuilder.DropTable(
                name: "Clients");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
