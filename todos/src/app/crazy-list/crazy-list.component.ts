import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Response } from "@angular/http";
import {Observable} from "rxjs";

import 'rxjs/Rx';
import { ITodo } from '../model/TodoModel';

@Component({
  selector: 'app-crazy-list',
  templateUrl: './crazy-list.component.html',
  styleUrls: ['./crazy-list.component.css']
})
export class CrazyListComponent implements OnInit {

  todoList:Observable<any>;
  @ViewChild('cancel') cancelEl;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  	this.todoList = this.httpService.getTestData();//.subscribe((data:any) => console.log(data));  	  	
 //this.httpService.getTestData().forEach(d =>console.log(d));
 }

 	DoneFirst(){ 		 		
 		console.log('start');
 		let el = document.getElementById('canelTst');

		//el is null, thanks for "shadow dom"

console.log(this.cancelEl);
		let cancel$ = Observable.fromEvent(this.cancelEl.nativeElement, 'click');

/*
var subscription = cancel$.subscribe(
  (x) => console.log('next ', x),
  (err) => console.log('ups!'),
  () => console.log('done'));
*/
 
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

	Cancel(){				
		//this.httpService.setCancelation(Observable.fromEvent(this.cancelEl, 'click'));
	}
}
