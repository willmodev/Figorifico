import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientsModule { }
