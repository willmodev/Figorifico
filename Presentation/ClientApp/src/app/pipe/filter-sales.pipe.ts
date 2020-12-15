import { Pipe, PipeTransform } from '@angular/core';
import { Invoice } from '../Models/Invoice';

@Pipe({
  name: 'filterSales'
})
export class FilterSalesPipe implements PipeTransform {

  transform(invoices: Invoice[], searchText: string): any {
    if (searchText == null ) {return invoices; }

    return invoices.filter(i => i.saleDate.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    || i.client.name.toLowerCase().indexOf(searchText) !== -1);
  }

}
