import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable }    from 'rxjs/Observable';

@Injectable()
export class ComunicatorService {

  private infoParentChild = new Subject<string>();
  private infoChildParent = new Subject<string>();

  infoPC$:Observable<any> = this.infoParentChild.asObservable();
  infoCP$:Observable<any> = this.infoChildParent.asObservable();

  constructor() { 
  }

  order(info:string){  	
  	this.infoParentChild.next(info);
  }

  inform(info:string){  	
  	this.infoChildParent.next(info);
  }

}
