import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorkCutsComponent } from './components/pork-cuts/pork-cuts.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { PorkCutsRoutingModule } from './pork-cuts-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    PorkCutsComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    PorkCutsRoutingModule,
    MaterialModule
  ]
})
export class PorkCutsModule { }
