import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { SignalRService } from 'src/app/core/services/signal/signal-r.service';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-chicken-cuts',
  templateUrl: './chicken-cuts.component.html',
  styleUrls: ['./chicken-cuts.component.css']
})
export class ChickenCutsComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private signalService: SignalRService
    ) { }

  products: Product[];

  ngOnInit() {
    this.getAllProducts();
    this.signalR();
  }

  getAllProducts() {
    this.productService.get().subscribe(result => {
      this.products = result.filter(p => p.type === 'Carne de Pollo');
    });
  }
  signalR() {
    this.signalService.signalReceived.subscribe((product: Product) => {
      this.products.push(product);
    });
  }

  addCart(product: Product) {
    this.cartService.addCart(product);
  }

}
