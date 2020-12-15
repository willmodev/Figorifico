import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from 'src/app/Models/product.model';
import { SignalRService } from 'src/app/core/services/signal/signal-r.service';


@Component({
  selector: 'app-pork-cuts',
  templateUrl: './pork-cuts.component.html',
  styleUrls: ['./pork-cuts.component.css']
})
export class PorkCutsComponent implements OnInit {

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
       this.products = result.filter(p => p.type === 'Carne de Cerdo');
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
