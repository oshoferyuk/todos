import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ComunicatorService {

  private infoParentChild = new Subject<string>();

  //infoPC$ = this.infoParentChild.asObservable();

  constructor() { 

	
  }

  order(info:string){
  	//this.infoParentChild.next(info);
  }

}
