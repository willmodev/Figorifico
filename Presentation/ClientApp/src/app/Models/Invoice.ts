import { InvoiceDetail } from './InvoiceDetail';
import { Product } from './product.model';

export class Invoice {

    idInvoice: string;
    subtotal = 0;
    totalIva = 0;
    total = 0;
    saleDate: string;
    dueDate: string;
    paymentMethod: string;
    idClient: string;
    invoiceDetails: InvoiceDetail[];

    constructor () {
        this.invoiceDetails = [];
        const fecha = new Date();
        this.saleDate = fecha.toLocaleString();
        this.dueDate =  new Date(fecha.getFullYear(), fecha.getMonth() + 2 , fecha.getDay(),
                                fecha.getHours(), fecha.getMinutes(), fecha.getSeconds()).toLocaleString();
    }

    addInvoiceDetails (product: Product, quantity: number, discount: number, price: number ) {
      const detail = new InvoiceDetail(product, quantity, discount, price);
      detail.idInvoice = this.idInvoice;
      this.invoiceDetails.push(detail);
    }

    calculateSubtotal(): void {
        this.subtotal = 0;
        for (const item of this.invoiceDetails) {
            this.subtotal += item.tolalDetail;
        }
    }

    calcularteTotalIva(): void {
        this.totalIva = 0;
        for (const item of this.invoiceDetails) {
            this.totalIva +=  item.CalculateIva();
        }
    }

    calculateTotal(): void {
        this.total = 0;
        this.calculateSubtotal();
        this.calcularteTotalIva();

        this.total = this.subtotal + this.totalIva;
    }
}
