import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChickenCutsComponent } from './components/chicken-cuts/chicken-cuts.component';

const routes: Routes = [
  { path: '', component: ChickenCutsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class ChickenCutsRoutingModule { }
