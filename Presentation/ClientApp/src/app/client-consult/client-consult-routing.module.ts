import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthAdminGuard } from '../services/auth-admin.guard';
import { ClientConsultComponent } from './components/client-consult/client-consult.component';

const routes: Routes = [

  { path: '', component: ClientConsultComponent, canActivate: [AuthAdminGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class ClientConsultRoutingModule { }
