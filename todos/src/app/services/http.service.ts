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

	private urls = this.urls1.concat(this.urls2);
	private testurl1:string = "https://todo-db834.firebaseio.com/todos1.json";
	private testurl2:string = "https://todo-db834.firebaseio.com/todos2.json";

  	constructor(private http: Http) { }
  	
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




	/** SWITCH LATEST item
	//------1---1---1-------
	//----a---a---a---------
	///--------------------1
	*/
	private switchLatestItem(obs1$:Observable<any>, obs2$:Observable<any>)
  	:Observable<any>{  	
  			return Observable.of(obs1$, obs2$).switch().last();
	}  	  


//Main modification function: map, zip, filter, reduce, concatAll, scan

	//filter
	private getNumber2(obs1$:Observable<any>)
  	:Observable<any>{  	
  			return obs1$.filter((item,index) => index === 1);
	}	

	//zip
	private getPart(obs$:Observable<any>):Observable<any>{
		return Observable.zip(
  			this.http.get(this.testurl1),
  			this.http.get(this.testurl2),
  			function(res1, res2){  				
  				return res2.json().concat(res1.json());
  			});
	}

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

	public getAllAtOnce(): Observable<any>{
		return this.allAtOnce$().map(r => this.getResult(r)).concatAll().reduce((acc,cur) => acc.concat(cur));
	}

	public getTestData(): Observable<any>{  	
		//return Observable.empty();
  		
	return this.getPart(this.allAtOnce$());
  }

//////////////////////////////////////////////////////////////////////////

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
  	
	private allAtOnce$():Observable<any>{		
		return Observable.forkJoin(			
			this.http.get(this.urls[0]),
			this.http.get(this.urls[1]),
			this.http.get(this.urls[2]),
			this.http.get(this.urls[3]),
			this.http.get(this.urls[4]),
			this.http.get(this.urls[5]));
	}


  	private getResult(obs$:Observable<any>):Observable<any>{
		return obs$.map((r:Response) => r.json()).map(log => {
			console.log(log);
			return log;
		});

  	}
}
