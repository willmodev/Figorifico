import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PorkCutsComponent } from './components/pork-cuts/pork-cuts.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { AuthClientGuard } from '../services/auth-client.guard';


const routes: Routes = [
  {
    path: '',
    component: PorkCutsComponent,
    canActivate: [AuthClientGuard]
  },
  {
    path: ':id',
    component: ProductDetailComponent,
    canActivate: [AuthClientGuard]
  }
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
export class PorkCutsRoutingModule { }
