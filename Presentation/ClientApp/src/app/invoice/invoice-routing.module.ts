import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './components/invoice/invoice.component';

const routes: Routes = [
  { path: '', component: InvoiceComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class InvoiceRoutingModule { }
