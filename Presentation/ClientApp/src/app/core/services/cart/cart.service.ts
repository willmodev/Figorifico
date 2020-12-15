import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = [];
  private cart =  new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product) {
   if (this.products.length !== 0) {
    if (this.search(product) === false) {
      this.products = [...this.products, product];
      this.cart.next(this.products);
    }
   } else {
    this.products = [...this.products, product];
    this.cart.next(this.products);

   }
  }

  search(product: Product): boolean {
    for (const p of this.products) {
      if (product.idProduct === p.idProduct ) {
        return true;
      }
    }
    return false;
  }


  removeCart(index) {
    console.log('Car => ' + index);
    this.products.splice(index, 1);
    this.cart.next(this.products);
  }

  cleanCart() {
    this.products = [];
    this.cart.next(this.products);
  }
}
