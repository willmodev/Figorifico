import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthClientGuard } from '../services/auth-client.guard';
import { ChickenCutsComponent } from './components/chicken-cuts/chicken-cuts.component';

const routes: Routes = [
  { path: '', component: ChickenCutsComponent , canActivate: [AuthClientGuard]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ChickenCutsRoutingModule { }
