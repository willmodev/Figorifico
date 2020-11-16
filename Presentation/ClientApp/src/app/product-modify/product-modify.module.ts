import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductModifyComponent } from './product-modify.component';
import { MaterialModule } from '../material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductModifyComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ProductModifyModule { }
