import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientConsultRoutingModule } from './client-consult-routing.module';
import { ClientConsultComponent } from './components/client-consult/client-consult.component';
import { FilterClientsPipe } from '../pipe/filter-clients.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ClientConsultComponent,
    FilterClientsPipe
  ],
  imports: [
    CommonModule,
    ClientConsultRoutingModule,
    FormsModule
  ]
})
export class ClientConsultModule { }
