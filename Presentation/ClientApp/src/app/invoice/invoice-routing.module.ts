import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { AuthAdminGuard } from '../services/auth-admin.guard';

const routes: Routes = [
  { path: '', component: InvoiceComponent, canActivate: [AuthAdminGuard]}
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
