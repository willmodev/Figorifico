import { Injectable } from '@angular/core';
import { Client } from 'src/app/Models/client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl: string;
  get(): Client[] {
    return JSON.parse(localStorage.getItem('datosClient'));
  }

  post(client: Client) {
    let clients: Client[] = [];
    if (this.get() != null) {
      clients = this.get();
    }
    clients.push(client);
    localStorage.setItem('datosClient', JSON.stringify(clients));
  }
}
