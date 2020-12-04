import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthAdminGuard } from '../services/auth-admin.guard';
import { AuthDomiciliaryGuard } from '../services/auth-domiciliary.guard';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  { path: '', component: OrderComponent, canActivate: [AuthDomiciliaryGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
