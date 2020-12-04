import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthAdminGuard } from '../services/auth-admin.guard';

const routes: Routes = [
  { path: '', component: ProductsComponent, canActivate: [AuthAdminGuard] }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [
    RouterModule
  ]
})
export class ProductsRoutingModule { }
