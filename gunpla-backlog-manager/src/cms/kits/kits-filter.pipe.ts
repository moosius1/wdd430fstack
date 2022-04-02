import { Pipe, PipeTransform } from '@angular/core';
import { Kit } from './kit.model';

@Pipe({
  name: 'kitsFilter'
})
export class KitsFilterPipe implements PipeTransform {

  transform(kits: Kit[], term: string): any {
    let filteredKits: Kit[] = [];

    if(term && term.length > 0) {
      filteredKits = kits.filter(
        (kit: Kit) => kit.name.toLowerCase().includes(term.toLowerCase())
      );
    }

    if(filteredKits.length < 1){
      return kits;
    }

    return filteredKits;
  }

}
