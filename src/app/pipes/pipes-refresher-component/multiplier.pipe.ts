import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
        name: 'multiplier'
})

export class MultiplierPipe implements PipeTransform {
    transform(value: any, args: any, args1:any, args2:any): any {
        console.log(args+ "--" + args1 + "--" + args2);
        return value * (args || 1) * (args1 || 1);
    }

    //<p>15 multiped by 3 is: {{ 15 | multiplier:3:9:0 }}</p>
}
