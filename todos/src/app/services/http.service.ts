import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import {Observable} from "rxjs";

//import { Observable } from "rxjs/Observable";


@Injectable()
export class HttpService {


private urls1:string[] = ["https://todo-db834.firebaseio.com/todos1.json",
				           "https://todo-db834.firebaseio.com/todos1.json",
				           "https://todo-db834.firebaseio.com/todos1.json"];

private urls2:string[] = ["https://todo-db834.firebaseio.com/todos2.json",
			              "https://todo-db834.firebaseio.com/todos2.json",
			              "https://todo-db834.firebaseio.com/todos2.json"];

private testurl:string = "https://todo-db834.firebaseio.com/todos1.json";

  	constructor(private http: Http) { }

  	private cancel$:Observable<any> = Observable.empty();

  	private getRandomTime():number{
  		return Math.random()*3000;
  	}

  	private getTodo$(urls:string[]):Observable<any>{
		return Observable
	  		.interval(this.getRandomTime())
	  		.take(urls.length)
	  		.map(i => this.http.get(urls[i]));
  	}
  	
	
  	private getResult(obs$:Observable<any>):Observable<any>{
		return obs$.map((r:Response) => r.json()).map(log => {
			console.log(log);
			return log;
		});

  	}

/* Main combination strategies: concat, merge and switch

  	/** CONCAT STRATEGY
	//------1---1---1-------
	//----a---a---a----------
	///--------------------1-1-1--a-a-a
	///--------------------a-a-a--1-1-1
  	 */
  	private concat(obs1$:Observable<any>, obs2$:Observable<any>, first:boolean)
  	:Observable<any>{
  		if(first){
  			return Observable.concat(obs1$, obs2$);
  		}else{
  			return Observable.concat(obs2$, obs1$);
  		}
  	}

  	/** MERGE STRATEGY
	//------1---1---1-------
	//----a---a---a----------
	///--------------------a-a-1-1-a-1-- or similar
  	 */
  	private merge(obs1$:Observable<any>, obs2$:Observable<any>)
  	:Observable<any>{  	
  			return Observable.merge(obs1$, obs2$);  	
	}


	/** SWITCH LATEST group
	//------1---1---1-------
	//----a---a---a----------
	///------------------1-1-1
  	 
	//------1---1---1-------
	//-------a---a----a-----
	///------------------a-a-a
  	 */

	private switchLatestGroup(obs1$:Observable<any>, obs2$:Observable<any>)
  	:Observable<any>{  	
  			return Observable.of(obs1$, obs2$).switch();
	}


//TODO: switch().switch();

	/** SWITCH LATEST item
	//------1---1---1-------
	//----a---a---a---------
	///--------------------1
	*/
	private switchLatestItem(obs1$:Observable<any>, obs2$:Observable<any>)
  	:Observable<any>{  	
  			return Observable.of(obs1$, obs2$).switch().last();
	}  	  


//Main modification function: map, zip, filter, reduce, concatAll


	//filter
	private getNumber2(obs1$:Observable<any>)
  	:Observable<any>{  	
  			return obs1$.filter((item,index) => index === 1);
	}	

	//zip





//Subject
/*
let subject = new Rx.Subject();
var subscription = subject.subscribe(
    function (x) { console.log('onNext: ' + x); },
    function (e) { console.log('onError: ' + e.message); },
    function () { console.log('onCompleted'); });


subject.onNext(1);
// => onNext: 1
subject.onNext(2);
// => onNext: 2
subject.onCompleted();
// => onCompleted
subscription.dispose();
*/




	public doneFirst(cancel$:Observable<any>): Observable<any>{					
		let todoDone$:Observable<any> = this.getTodo$(this.urls1);
  		let todoNotDone$:Observable<any> = this.getTodo$(this.urls2);  		
  		let todoR$:Observable<any> = this.concat(todoDone$, todoNotDone$, false);
		return this.getResult(todoR$.takeUntil(cancel$).concatAll()).reduce((acc,cur) => acc.concat(cur));
	}

	public doneLast(): Observable<any>{		
		let todoDone$:Observable<any> = this.getTodo$(this.urls1);
  		let todoNotDone$:Observable<any> = this.getTodo$(this.urls2);  		
  		let todoR$:Observable<any> = this.concat(todoDone$, todoNotDone$, true);
		return this.getResult(todoR$.concatAll()).reduce((acc,cur) => acc.concat(cur));
	}


	public mergeGroup(): Observable<any>{
		let todoDone$:Observable<any> = this.getTodo$(this.urls1);
  		let todoNotDone$:Observable<any> = this.getTodo$(this.urls2);  		
  		let todoR$:Observable<any> = this.merge(todoDone$, todoNotDone$);
		return this.getResult(todoR$.concatAll()).reduce((acc,cur) => acc.concat(cur));
	}


	public switchGroup(): Observable<any>{
		let todoDone$:Observable<any> = this.getTodo$(this.urls1);
  		let todoNotDone$:Observable<any> = this.getTodo$(this.urls2);  		
  		let todoR$:Observable<any> = this.switchLatestGroup(todoDone$, todoNotDone$);
		return this.getResult(todoR$.concatAll()).reduce((acc,cur) => acc.concat(cur));
	}


//NOT works, too late
	public setCancelation(cancel$:Observable<any>){
		this.cancel$ = cancel$;
	}


	public getTestData(): Observable<any>{  	
  		let todoDone$:Observable<any> = this.getTodo$(this.urls1);
  		let todoNotDone$:Observable<any> = this.getTodo$(this.urls2);  		
  		let todoR$:Observable<any> = this.concat(todoDone$, todoNotDone$, false);
  		//let todoR$:Observable<any> = this.merge(todoDone$, todoNotDone$);
		//let todoR$:Observable<any> = this.getNumber2(todoDone$);

		//let tR$ = todoR$.reduce((acc, cur) => {return Observable.of(acc,cur)});
		
		return this.getResult(todoR$.concatAll()).reduce((acc,cur) => acc.concat(cur));
  		
  		//return this.getResult(todoR$.flatMap((r:Response) => r.json()));
  		//return this.getResult(test.concatAll());


  		//return this.http.get(this.testurl).map((response:Response) => response.json());
  }
}
