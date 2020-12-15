import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/services/auth/authentication.service';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { ClientService } from 'src/app/core/services/client/client.service';
import { Client } from 'src/app/Models/client.model';
import { Product } from 'src/app/Models/product.model';
import { InvoiceService } from 'src/app/core/services/invoice/invoice.service';
import { Invoice } from 'src/app/Models/Invoice';
import { AlertDialogComponent } from 'src/app/@base/alert-dialog/alert-dialog.component';
import { MatDialog } from '@angular/material';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  client: Client;
  invoice: Invoice;
  products$: Observable<Product[]>;
  products: Product[];
  quantity = 1;

  constructor(
    private invoiceService: InvoiceService,
    private cartService: CartService,
    private clientService: ClientService,
    private authService: AuthenticationService,
    public dialog: MatDialog) {
    this.invoice =  new Invoice();
    this.client = new Client();
    this.products$ =  this.cartService.cart$;
  }

  ngOnInit() {
    this.getUser();
    this.addNumber();
  }

  getUser(): void {
    const user = this.authService.currentUserValue;
    this.clientService.getClientUser(user.userName).subscribe(c => {
      this.invoice.idClient = c.indentification;
      this.invoice.paymentMethod = 'Contraentrega';
      this.client = c;
    });
  }



  addNumber() {
    this.invoiceService.getCount().subscribe(count => {
      console.log(count);
      this.invoice.idInvoice = this.PadLeft(count, 4);
      this.addDetail();
    });
  }

  PadLeft(value, length) {
    return (value.toString().length < length) ? this.PadLeft('0' + value, length) : value;
  }

  addDetail() {

    this.products$.subscribe(p => {
      if (p.length !== 0) {
        this.products = p;
        console.log('new detail');

      }
    });
    console.log('add detail');
    console.log(this.products);
    if (this.products !== undefined) {
      this.createDetails(this.products);
    }
  }

  createDetails(products: Product[]) {
    for (const product of products) {
      this.invoice.addInvoiceDetails(product, this.quantity, 0, product.salePrice);
      this.invoice.calculateTotal();
    }
  }
  add(index, input) {
    // tslint:disable-next-line:radix
    let quantity = parseInt(input.value);
    if (quantity < this.invoice.invoiceDetails[index].product.quantity) {
      quantity++;
      console.log(quantity);
      this.calculateDetail(index, quantity);
    }
  }
  remove(index, input) {
    // tslint:disable-next-line:radix
    let quantity = parseInt(input.value);
    if (quantity > 1) {
      quantity--;
      console.log(quantity);
      this.calculateDetail(index, quantity);
    }
  }
  calculateDetail(index, quantity) {
    for (let i = 0; i < this.invoice.invoiceDetails.length; i++) {
      if (i === index) {
        this.invoice.invoiceDetails[i].quantity = quantity;
        this.invoice.invoiceDetails[i].CalculateTotalDetail();
        this.invoice.calculateTotal();
        break;
      }
    }
  }


  delete (index): void {
    console.log('Order => ' + index);
    this.cartService.removeCart(index);
    this.invoice.invoiceDetails.splice(index, 1);

    this.invoice.calculateTotal();
  }
  addInvoice() {
    console.log(this.invoice);
    console.log(this.invoice.invoiceDetails.length !== 0);
    if (this.invoice.invoiceDetails.length !== 0) {

      this.invoiceService.post(this.invoice).subscribe(i => {
        if ( i != null ) {
          this.dialog.open(AlertDialogComponent, {
            width: '350px',
            data: { title: 'Resultado Operacion!', message: 'Compra realizada con exito...!',
                      nameBtnOne: 'Close', nameBtnTwo: 'Aceptar', btnEnable: false}
          });
          this.invoice = new Invoice();
          this.cartService.cleanCart();
        }
      });

    } else {
      this.dialog.open(AlertDialogComponent, {
        width: '350px',
        data: { title: 'Menssage Informativo', message: 'No hay productos para comprar...!',
                  nameBtnOne: 'Close', nameBtnTwo: 'Aceptar', btnEnable: false}
      });
    }
  }


}
