import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../Models/client.model';

@Pipe({
  name: 'filterClients'
})
export class FilterClientsPipe implements PipeTransform {

  transform(clients: Client[], searchText: string): any {
    if (searchText == null) { return clients; }
    return clients.filter(c => c.indentification.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
  }


}
