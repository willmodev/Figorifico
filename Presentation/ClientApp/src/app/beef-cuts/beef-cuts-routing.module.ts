import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeefCutsComponent } from './components/beef-cuts/beef-cuts.component';

const routes: Routes = [
  {path: '', component: BeefCutsComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class BeefCutsRoutingModule { }
