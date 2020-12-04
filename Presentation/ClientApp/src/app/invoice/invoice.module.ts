import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [InvoiceComponent ],
  imports: [
    CommonModule,
    InvoiceRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ]
})
export class InvoiceModule { }
