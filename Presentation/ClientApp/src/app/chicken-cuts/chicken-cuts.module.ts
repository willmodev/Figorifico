import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChickenCutsRoutingModule } from './chicken-cuts-routing.module';
import { ChickenCutsComponent } from './components/chicken-cuts/chicken-cuts.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ChickenCutsComponent
  ],
  imports: [
    CommonModule,
    ChickenCutsRoutingModule,
    MaterialModule
  ]
})
export class ChickenCutsModule { }
