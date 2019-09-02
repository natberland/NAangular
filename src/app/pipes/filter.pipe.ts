import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, filterBy: string) {
    return items.filter(item => item.name.indexOf(filterBy) !== -1); 
  }

}
