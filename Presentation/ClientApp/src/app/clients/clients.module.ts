import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsRoutingModule } from './clients-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    FormsModule
  ]
})
export class ClientsModule { }
