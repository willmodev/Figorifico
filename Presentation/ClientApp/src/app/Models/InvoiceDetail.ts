import { Product } from './product.model';

export class InvoiceDetail {
    idDetail: number;
    unitValue: number;
    quantity: number;
    discount: number;
    tolalDetail: number;
    idInvoice: string;
    idProduct: string;
    product: Product;

    constructor (product: Product, quantity: number, discount: number, price: number) {
        this.product = product;
        this.unitValue = price;
        this.idProduct = product.idProduct;
        this.quantity = quantity;
        this.discount = discount;
        this.idDetail = 0;
        this.CalculateTotalDetail();
    }

    CalculateTotalDetail (): void {
        this.tolalDetail = (this.quantity * this.product.salePrice) * (1 - (this.discount / 100));
    }

    CalculateIva(): number {
        return this.tolalDetail * (this.product.iva / 100);
    }

}
