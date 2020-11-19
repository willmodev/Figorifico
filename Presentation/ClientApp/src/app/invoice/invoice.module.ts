import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [InvoiceComponent],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    MaterialModule
  ]
})
export class InvoiceModule { }
