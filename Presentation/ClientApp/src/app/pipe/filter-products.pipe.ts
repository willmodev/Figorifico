import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Models/product.model';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: Product[], searchText: string): any {
    if (searchText == null) { return products; }
    return products.filter(p => p.idProduct.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }

}
