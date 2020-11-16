import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeefCutsRoutingModule } from './beef-cuts-routing.module';
import { BeefCutsComponent } from './components/beef-cuts/beef-cuts.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [BeefCutsComponent],
  imports: [
    CommonModule,
    BeefCutsRoutingModule,
    MaterialModule
  ]
})
export class BeefCutsModule { }
