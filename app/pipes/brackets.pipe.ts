import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'brackets'})
export class BracketsPipe implements PipeTransform {
  transform(value: string, newcase : string = 'n', len : number = 0) {
      if ( newcase == 'u')
          value = value.toUpperCase();
      else
         if ( newcase == "l")
            value = value.toLowerCase();

      if ( len != 0)      
         value = value.substring(0,len)

      return "[" + value + "]";
  }
}