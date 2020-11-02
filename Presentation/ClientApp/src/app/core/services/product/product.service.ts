import { Injectable } from '@angular/core';
import {Product} from '../../../Models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }



  products: Product[] = [
  {
    id: '1',
    image: 'assets/images/camiseta.png',
    title: 'Camiseta',
    salePrice: 80000,
    description: 'bla bla bla bla bla',
    quantity: 15,
    category: 'cerdo',
    iva: 19,
    purchasePrice: 70000,
    suggestedPrice: 8000
  },
  {
    id: '2',
    image: 'assets/images/hoodie.png',
    title: 'Hoodie',
    salePrice: 80000,
    description: 'bla bla bla bla bla',
    quantity: 15,
    category: 'cerdo',
    iva: 19,
    purchasePrice: 70000,
    suggestedPrice: 8000
  },
  {
    id: '3',
    image: 'assets/images/mug.png',
    title: 'Mug',
    salePrice: 80000,
    description: 'bla bla bla bla bla',
    quantity: 15,
    category: 'cerdo',
    iva: 19,
    purchasePrice: 70000,
    suggestedPrice: 8000
  },
  {
    id: '4',
    image: 'assets/images/pin.png',
    title: 'Pin',
    salePrice: 80000,
    description: 'bla bla bla bla bla',
    quantity: 15,
    category: 'cerdo',
    iva: 19,
    purchasePrice: 70000,
    suggestedPrice: 8000
  },
  {
    id: '5',
    image: 'assets/images/stickers1.png',
    title: 'Stickers',
    salePrice: 80000,
    description: 'bla bla bla bla bla',
    quantity: 15,
    category: 'cerdo',
    iva: 19,
    purchasePrice: 70000,
    suggestedPrice: 8000
  },
  {
    id: '6',
    image: 'assets/images/stickers2.png',
    title: 'Stickers',
    salePrice: 80000,
    description: 'bla bla bla bla bla',
    quantity: 15,
    category: 'cerdo',
    iva: 19,
    purchasePrice: 70000,
    suggestedPrice: 8000
  },
  ];

  getAllProducts() {
    return this.products;
  }

  getProduct(id: string): Product {
    return this.products.find(p => p.id === id);
  }



}


