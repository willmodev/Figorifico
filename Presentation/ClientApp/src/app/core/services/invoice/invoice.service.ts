import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { HandleHttpErrorService } from 'src/app/@base/handle-http-error.service';
import { Invoice } from 'src/app/Models/Invoice';
import { tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService
  ) { this.baseUrl = baseUrl; }

  post(invoice: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(this.baseUrl + 'api/Invoice', invoice)
    .pipe(tap(_ => this.handleErrorService.log('Factura guardada')),
    catchError(this.handleErrorService.handleError<Invoice>('Error al guardar la factura', null))
  ); }

}
