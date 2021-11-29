import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Models/product.model';

@Pipe({
  name: 'filterInvoice'
})
export class FilterInvoicePipe implements PipeTransform {

  transform(products: Product[], searchText: string): any {
    if (searchText == null) { return products.slice(0, 5).filter(p => p.quantity != 0); }
      return products.filter(p => p.idProduct.toLowerCase().indexOf(searchText.toLowerCase()) !== -1).slice(0, 5);
  }

}
