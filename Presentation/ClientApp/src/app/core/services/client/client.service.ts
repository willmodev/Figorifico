import { Inject, Injectable } from '@angular/core';
import { Client } from 'src/app/Models/client.model';
import { HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../../../@base/handle-http-error.service';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl: string;
  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string, private handleErrorService: HandleHttpErrorService) {
      this.baseUrl = baseUrl;
  }

  post(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl + 'api/Client', client)
           .pipe(tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<Client>('Error Registra Cliente', null))
 );
 }

  get(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl + 'api/Client')
    .pipe(tap(_ => this.handleErrorService.log('Clientes consultados')),
    catchError(this.handleErrorService.handleError<Client[]>('Error al consultar los Clientes', null))
    ); }

    delete(identification: string): Observable<Client> {
      return this.http.delete<Client>(this.baseUrl + 'api/Client/' + identification)
      .pipe( tap (_ => this.handleErrorService.log('Cliente eliminado')),
      catchError(this.handleErrorService.handleError<Client>('Error al eliminar el Cliente', null))
      );
    }

    put(client: Client): Observable<Client> {
      return this.http.put<Client>(this.baseUrl + 'api/Client', client)
      .pipe( tap(_ => this.handleErrorService.log('Cliente modificado')),
      catchError(this.handleErrorService.handleError<Client>('Error al modificar el Cliente', null))
      );
    }
}
