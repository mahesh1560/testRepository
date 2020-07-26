import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nametransform'
})
export class NametransformPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
