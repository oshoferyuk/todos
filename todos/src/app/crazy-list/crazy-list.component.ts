import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Response } from "@angular/http";
import {Observable, Subject, ReplaySubject, BehaviorSubject} from "rxjs";

import 'rxjs/Rx';
import { ITodo } from '../model/TodoModel';

@Component({
  selector: 'app-crazy-list',
  templateUrl: './crazy-list.component.html',
  styleUrls: ['./crazy-list.component.css']
})
export class CrazyListComponent implements OnInit {

  subjectChk:boolean;
  todoList:Observable<any>;
  bSubject:Subject<any>;

  @ViewChild('cancel') cancelEl;

  constructor(private httpService: HttpService) { }

	ngOnInit() {
	  	this.todoList = this.httpService.getAllAtOnce(); //.subscribe((data:any) => console.log(data));  	  	
	  	//this.bSubject = new BehaviorSubject([]); 
		this.bSubject = new ReplaySubject(2 /*buffer size*/); 	  	
	}

 	DoneFirst(){ 		 		 		 			
		let cancel$ = Observable.fromEvent(this.cancelEl.nativeElement, 'click');
 		this.todoList = this.httpService.doneFirst(cancel$);
	}

	DoneLast(){
 		this.todoList = this.httpService.doneLast();	
	}

	MergeGroup(){		
		this.todoList = this.httpService.mergeGroup();	
	}

	SwitchGroup(){
		this.todoList = this.httpService.switchGroup();
	}

	GetAllAtOnce(){
		this.todoList = this.httpService.getAllAtOnce(); //.subscribe((data:any) => console.log(data));  	  	
	}


	GetTodoSubject(todo:any){					
		
		this.bSubject.next([todo]);
		this.bSubject.next([todo]);
		this.bSubject.next([todo]);

this.todoList = this.bSubject;
		//this.bSubject.forEach(e => console.log(e));

		

	/*
bSubject.subscribe((value) => {
  console.log("Subscription got", value);
	});
*/
	}


}
