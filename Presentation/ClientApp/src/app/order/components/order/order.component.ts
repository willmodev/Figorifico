import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Product } from 'src/app/Models/product.model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  products$: Observable<Product[]>;

  constructor(private cartService: CartService) { 
    this.products$ =  this.cartService.cart$;
  }

  ngOnInit() {
  }

}
