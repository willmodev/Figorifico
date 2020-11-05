import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorkCutsComponent } from './components/pork-cuts/pork-cuts.component';
import { PorkCutsRoutingModule } from './pork-cuts-routing.module';
import { MaterialModule } from '../material/material.module';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


@NgModule({
  declarations: [
    PorkCutsComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    PorkCutsRoutingModule,
    MaterialModule,
  ]
})
export class PorkCutsModule { }
