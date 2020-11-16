import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/core/services/client/client.service';
import { Client } from 'src/app/Models/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  client: Client;
  clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.client = new Client();
    this.getClient();
  }

  getClient() {
    this.clients = this.clientService.get();
  }

  addClient()  {
    console.log(this.client);
    this.clientService.post(this.client);
    alert('Cliente Guardado...!');
    this.getClient();
  }

}
