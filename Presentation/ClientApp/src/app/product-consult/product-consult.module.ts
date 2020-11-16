import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductConsultComponent } from './components/product-consult/product-consult.component';

import { ProductConsultRoutingModule } from './product-consult-routing.module';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { FilterProductsPipe } from '../pipe/filter-products.pipe';

@NgModule({
  declarations: [
    ProductConsultComponent,
    FilterProductsPipe,
  ],
  imports: [
    CommonModule,
    ProductConsultRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ProductConsultModule { }
