import { Pipe, PipeTransform } from '@angular/core';
import { State } from '../model/State';

@Pipe({
  name: 'status',
  pure: false
})
export class StatusPipe implements PipeTransform {

  transform(value: any, state?: any): any {
//console.log(state);
    if(state == 0 || !Array.isArray(value))
      return value;    
    if(state == 1){
      return value.filter(v => !v.state );
    }else{
      return value.filter(v => v.state );
    }
    
  }
}
