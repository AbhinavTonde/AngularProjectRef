import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeName'
})
export class PipeNamePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {

    let temp:string = ""

    for(let i=value.length-1; i>=0; i--){
      temp = temp + value.charAt(i);
    }

    return temp;
    
  }

}
