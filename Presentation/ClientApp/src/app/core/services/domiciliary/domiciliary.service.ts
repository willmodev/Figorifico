import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, catchError} from 'rxjs/operators';
import { HandleHttpErrorService } from 'src/app/@base/handle-http-error.service';
import { Car } from 'src/app/Models/Car';

@Injectable({
  providedIn: 'root'
})
export class DomiciliaryService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService

  ) { this.baseUrl = baseUrl; }

  post(vehicle: Car): Observable<Car> {
    return this.http.post<Car>(this.baseUrl + 'api/Vehicle', vehicle)
           .pipe(tap(_ => this.handleErrorService.log('Domiciliario registrado..!')),
            catchError(this.handleErrorService.handleError<Car>('Error al registra domiciliario' , null))
 );
 }

 get(): Observable<Car[]> {
  return this.http.get<Car[]>(this.baseUrl + 'api/Vehicle')
  .pipe(tap(_ => this.handleErrorService.log('Domiciliarios consultados')),
  catchError(this.handleErrorService.handleError<Car[]>('Error al consultar los domiciliarios', null))
  ); }
}
