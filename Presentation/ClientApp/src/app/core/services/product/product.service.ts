import { Inject, Injectable } from '@angular/core';
import { Product } from '../../../Models/product.model';
import { HttpClient } from '@angular/common/http';
import { HandleHttpErrorService } from '../../../@base/handle-http-error.service';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrle: string;
  products: Product[];

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService
    ) {
      this.baseUrle = baseUrl;
    }

    post(product: Product): Observable<Product> {
      return this.http.post<Product>(this.baseUrle + 'api/PorkCuts', product)
      .pipe(tap(_ => this.handleErrorService.log('producto guardado')),
      catchError(this.handleErrorService.handleError<Product>('error al guardar el producto', null))
    ); }

    get(): Observable<Product[]> {
      return this.http.get<Product[]>(this.baseUrle + 'api/PorkCuts')
      .pipe(tap(_ => this.handleErrorService.log('productos consultados')),
      catchError(this.handleErrorService.handleError<Product[]>('Error al consultar productos', null))
      ); }



  // products: Product[] = [
  // {
  //   id: '1',
  //   image: 'assets/images/camiseta.png',
  //   title: 'Camiseta',
  //   salePrice: 80000,
  //   description: 'bla bla bla bla bla',
  //   quantity: 15,
  //   category: 'cerdo',
  //   iva: 19,
  //   purchasePrice: 70000,
  //   suggestedPrice: 8000
  // },
  // {
  //   id: '2',
  //   image: 'assets/images/hoodie.png',
  //   title: 'Hoodie',
  //   salePrice: 80000,
  //   description: 'bla bla bla bla bla',
  //   quantity: 15,
  //   category: 'cerdo',
  //   iva: 19,
  //   purchasePrice: 70000,
  //   suggestedPrice: 8000
  // },
  // {
  //   id: '3',
  //   image: 'assets/images/mug.png',
  //   title: 'Mug',
  //   salePrice: 80000,
  //   description: 'bla bla bla bla bla',
  //   quantity: 15,
  //   category: 'cerdo',
  //   iva: 19,
  //   purchasePrice: 70000,
  //   suggestedPrice: 8000
  // },
  // {
  //   id: '4',
  //   image: 'assets/images/pin.png',
  //   title: 'Pin',
  //   salePrice: 80000,
  //   description: 'bla bla bla bla bla',
  //   quantity: 15,
  //   category: 'cerdo',
  //   iva: 19,
  //   purchasePrice: 70000,
  //   suggestedPrice: 8000
  // },
  // {
  //   id: '5',
  //   image: 'assets/images/stickers1.png',
  //   title: 'Stickers',
  //   salePrice: 80000,
  //   description: 'bla bla bla bla bla',
  //   quantity: 15,
  //   category: 'cerdo',
  //   iva: 19,
  //   purchasePrice: 70000,
  //   suggestedPrice: 8000
  // },
  // {
  //   id: '6',
  //   image: 'assets/images/stickers2.png',
  //   title: 'Stickers',
  //   salePrice: 80000,
  //   description: 'bla bla bla bla bla',
  //   quantity: 15,
  //   category: 'cerdo',
  //   iva: 19,
  //   purchasePrice: 70000,
  //   suggestedPrice: 8000
  // },
  // ];

  // getAllProducts() {
  //   return this.products;
  // }

  // getProduct(id: string): Product {
  //   return this.products.find(p => p.id === id);
  // }



}


