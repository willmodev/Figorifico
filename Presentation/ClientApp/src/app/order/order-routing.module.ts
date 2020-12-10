import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthClientGuard } from '../services/auth-client.guard';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  { path: '', component: OrderComponent, canActivate: [AuthClientGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
