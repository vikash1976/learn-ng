import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'filterServers'
})
export class FilterServersPipe implements PipeTransform {

  transform(value: any, args0: string, args1: string): any {
    console.log(args0 + ":"+ args1);
    if(value.length === 0 || args0 === ''){
      return value;
    }
    const filteredServers = _.filter(value, {[args1] : args0});
    return filteredServers;
  }

}
