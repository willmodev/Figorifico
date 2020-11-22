import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientModifyComponent } from './components/client-modify/client-modify.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [ClientModifyComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ClientModifyModule { }
