import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToCrore'
})
export class ConvertToCrorePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): number {
    return value * 10000000;
  }

}
