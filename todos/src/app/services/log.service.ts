import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/Rx';


export interface IL {
    label: string;
}


export const APP_CONFIG:IL = {label:"aaa"}
export const HERO_DI_CONFIG:IL = {label:"bbb"}

@Injectable()
export class LogService {
  writeToLog(message: string){
    console.log('**** ' + message);
  }

  constructor(private http: Http){

  }

  //some http method
  getHttpData():Observable<any>{
     return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map(res => res.json());    
  }
}
