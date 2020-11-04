import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { from } from 'rxjs';
import { ProductService} from '../core/services/product/product.service';
import { Product } from '../Models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  product: Product;

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
        this.productService.get().subscribe(result => {
          console.log(result);
         this.product = result.find(p => p.idProduct === id);
       });
    });
  }

}
