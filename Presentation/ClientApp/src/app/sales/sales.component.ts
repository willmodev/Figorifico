import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AlertDialogComponent } from '../@base/alert-dialog/alert-dialog.component';
import { InvoiceService } from '../core/services/invoice/invoice.service';
import { Invoice } from '../Models/Invoice';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  invoices: Invoice[];
  totalSales: number;

  constructor(
    private invoiceService: InvoiceService,
    public dialog: MatDialog
    ) {  }


  ngOnInit() {
    this.get();
  }

  get (): void {
    this.invoiceService.get().subscribe(result => {
      if (result != null ) {
        this.dialog.open(AlertDialogComponent, {
          width: '250px',
          data: { title: 'Resultado Operacion!', message: 'Producto Creado..!',
                    nameBtnOne: 'Close', nameBtnTwo: 'Aceptar', btnEnable: false}
        });

        this.invoices = result;
        this.totalSale(this.invoices);
      }
    });
  }

  totalSale(invoices: Invoice[]) {
    for (const i of invoices ) {
      this.totalSales += i.total;
    }
  }

}
