import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomiciliaryComponent } from './components/domiciliary/domiciliary.component';

const routes: Routes = [
  { path: '', component: DomiciliaryComponent}
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
export class DomiciliaryRoutingModule { }
