import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Models/client.model';
import { Invoice } from 'src/app/Models/Invoice';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ClientService } from 'src/app/core/services/client/client.service';
import { Product } from 'src/app/Models/product.model';
import { ProductService } from 'src/app/core/services/product/product.service';
import { AlertDialogComponent } from 'src/app/@base/alert-dialog/alert-dialog.component';
import { InvoiceDetail } from 'src/app/Models/InvoiceDetail';
import { InvoiceService } from 'src/app/core/services/invoice/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoice: Invoice;
  client: Client;
  products: Product[];
  invoiceDetail: InvoiceDetail;
  formGroupClient: FormGroup;
  formGroupInvoice: FormGroup;
  formGroupDetail: FormGroup;
  searchText: string;
  stock: number;
  invoiceAux: Invoice;

  constructor(
    private invoiceService: InvoiceService,
    private productService: ProductService,
    private clientService: ClientService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) { this.buildForm(); }

  ngOnInit() {
    this.get();
  }

  private buildForm() {

    this.client = new Client();
    this.client.indentification = '';
    this.client.name = '';
    this.client.lastName  = '';

    this.formGroupClient = this.formBuilder.group({
      indentification: [this.client.indentification, Validators.required],
      name: [{value: this.client.name, disabled: true}],
      lastName: [{value: this.client.lastName, disabled: true}]
    });


    this.invoice =  new Invoice();
    this.invoice.paymentMethod = 'seleccionar...';


     this.formGroupInvoice = this.formBuilder.group({
      paymentMethod: [this.invoice.paymentMethod, this.valPaymentMethod],
      idInvoice: [this.invoice.idInvoice, Validators.required]

    });
  }

  private valPaymentMethod(control: AbstractControl) {
    const paymentMethod = control.value;
    if (paymentMethod !== 'seleccionar...' ) { return null; }
    return  {vPaymentMethod: true, mPaymentMethod: 'debe seleccionar una metodo de pago'};
  }

  get controlClient() {
    return this.formGroupClient.controls;
  }
  get controlInvoice() {
    return this.formGroupInvoice.controls;
  }
  get controlDetail() {
    return this.formGroupDetail.controls;
  }

  get() {
    this.productService.get().subscribe(p => {
      console.log(p);
      this.products = p;
     });
  }

  search(): void {
    const identification = this.formGroupClient.value.indentification;

    this.clientService.getClient(identification).subscribe( c => {
      if (c.indentification !== undefined ) {

        this.dialog.open(AlertDialogComponent, {
          width: '250px',
          data: { title: 'Resultado Operacion!', message: 'Cliente Encontrado...!',
                    nameBtnOne: 'Close', nameBtnTwo: 'Aceptar', btnEnable: false}
        });
        this.client = c;
        this.fillFields (this.client);


      } else {

        this.dialog.open(AlertDialogComponent, {
          width: '250px',
          data: { title: 'Resultado Operacion!', message: 'Cliente NO Encontrado...!',
                    nameBtnOne: 'Close', nameBtnTwo: 'Aceptar', btnEnable: false}
        });
      }
    });
  }

  fillFields (client: Client) {
    this.formGroupClient.get('name').setValue(this.client.name);
    this.formGroupClient.get('lastName').setValue(this.client.lastName);
    this.invoice.idInvoice = this.formGroupInvoice.value.idInvoice;
    this.invoice.paymentMethod = this.formGroupInvoice.value.paymentMethod;

  }

  addDetail (product: Product, q: string, p: string, d: string): void {

    // tslint:disable-next-line: radix
    const quantity = parseInt(q);
    // tslint:disable-next-line: radix
    const price = parseInt(p);
    // tslint:disable-next-line: radix
    const discount = parseInt(d);

    this.invoice.idClient = this.formGroupClient.value.indentification;


    this.invoice.addInvoiceDetails(product, quantity, discount, price);
    this.invoice.calculateTotal();

    console.log(this.invoiceDetail);

  }

  delete (index): void {
    this.invoice.invoiceDetails.splice(index, 1);
    this.invoice.calculateTotal();
  }

  addInvoice(): void {
    // this.invoiceAux = this.invoice;
    // this.invoiceAux.invoiceDetails[0].product = new Product();

    console.log(this.invoice);
    this.invoiceService.post(this.invoice).subscribe(i => {
      if ( i != null ) {
        this.dialog.open(AlertDialogComponent, {
          width: '250px',
          data: { title: 'Resultado Operacion!', message: 'Factura Guardada...!',
                    nameBtnOne: 'Close', nameBtnTwo: 'Aceptar', btnEnable: false}
        });
        console.log(i);
      }
    });
  }
}
