import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-chicken-cuts',
  templateUrl: './chicken-cuts.component.html',
  styleUrls: ['./chicken-cuts.component.css']
})
export class ChickenCutsComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private productService: ProductService
    ) { }

  products: Product[];

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.get().subscribe(result => {
      this.products = result.filter(p => p.type === 'Carne de Pollo');
    });
  }

  addCart(product: Product) {
    this.cartService.addCart(product);
  }

}
