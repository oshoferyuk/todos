import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Response } from "@angular/http";
import {Observable, Subject, AsyncSubject, BehaviorSubject, ReplaySubject} from "rxjs";

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
  subject:Subject<any>;

  @ViewChild('cancel') cancelEl;

  constructor(private httpService: HttpService) { }

	ngOnInit() {
	  	this.todoList = this.httpService.getAllAtOnce(); //.subscribe((data:any) => console.log(data));  	  	
	  	//this.subject = new AsyncSubject();
	  	//this.subject = new BehaviorSubject([]); 
		this.subject = new ReplaySubject(2 /*buffer size*/); 	  	

		
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
		this.subject.next([todo]);
		this.subject.next([todo]);
		this.subject.next([todo]);
		this.subject.complete();	

this.subject.subscribe((r) => { console.log(r);},
    							(err) => {},
    							() => {});			

	}


}
