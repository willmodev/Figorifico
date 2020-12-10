import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthAdminGuard } from '../services/auth-admin.guard';
import { ProductConsultComponent } from './components/product-consult/product-consult.component';

const routes: Routes = [
  { path: '', component: ProductConsultComponent, canActivate: [AuthAdminGuard] }
];

@NgModule({
  imports:
  [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class ProductConsultRoutingModule { }
