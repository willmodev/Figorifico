import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-pork-cuts',
  templateUrl: './pork-cuts.component.html',
  styleUrls: ['./pork-cuts.component.css']
})
export class PorkCutsComponent implements OnInit {

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
       this.products = result.filter(p => p.type === 'Carne de Cerdo');
    });
  }

  addCart(product: Product) {
    this.cartService.addCart(product);
  }

}
