import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthClientGuard } from '../services/auth-client.guard';
import { BeefCutsComponent } from './components/beef-cuts/beef-cuts.component';

const routes: Routes = [
  {path: '', component: BeefCutsComponent, canActivate: [AuthClientGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class BeefCutsRoutingModule { }
