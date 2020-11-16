import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ProductsModule { }
