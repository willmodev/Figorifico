import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PorkCutsComponent } from './components/pork-cuts/pork-cuts.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: PorkCutsComponent
  },
  {
    path: ':id',
    component: ProductDetailComponent
  }
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
export class PorkCutsRoutingModule { }
