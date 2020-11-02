import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './components/clients/clients.component';
import { ClientsRoutingModule } from './clients-routing.module';

@NgModule({
  declarations: [ClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule
  ]
})
export class ClientsModule { }
