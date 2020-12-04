import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DomiciliaryRoutingModule } from './domiciliary-routing.module';
import { DomiciliaryComponent } from './components/domiciliary/domiciliary.component';
import { MaterialModule } from '../material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DomiciliaryComponent
  ],
  imports: [
    CommonModule,
    DomiciliaryRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DomiciliaryModule { }
