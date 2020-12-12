import { EventEmitter, Inject, Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { Product } from 'src/app/Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection: signalR.HubConnection;
  signalReceived = new EventEmitter<Product>();
  baseUrl: string;
  constructor(@Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    this.buildConnection();
    this.startConnection();
   }


   private buildConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.baseUrl + 'signalHub')
      .build();
  }

  private startConnection = () => {
    this.hubConnection
      .start()
      .then(() => {
        console.log('Connection Started...');
        this.registerSignalEvents();
      })
      .catch(err => {
        console.log('Error while starting connection: ' + err);

        // if you get error try to start connection again after 3 seconds.
        setTimeout(function() {
          this.startConnection();
        }, 3000);
      });
  }

  private registerSignalEvents() {
    this.hubConnection.on('ProductoRegistrado', (data: Product) => {
      this.signalReceived.emit(data);
    });
  }
}
