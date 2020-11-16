import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HandleHttpErrorService } from 'src/app/@base/handle-http-error.service';
import { Category } from 'src/app/Models/category.model';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl: string;
  categorys: Category[];

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService
  ) {
    this.baseUrl = baseUrl;
   }

   get(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl + 'api/Category')
    .pipe(tap(_ => this.handleErrorService.log('categorias consultados')),
    catchError(this.handleErrorService.handleError<Category[]>('Error al consultar categorias', null))
    ); }


}
