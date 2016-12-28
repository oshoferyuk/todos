import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
  //inputs:['item']  
})
export class TodoItemComponent implements OnInit {
	@Input() item:Todo;	 
	@Output() todoCompleted = new EventEmitter<Todo>();
    @ViewChild('itemLbl') itemLabel:HTMLElement;



  constructor() { }

	destroyHandler(todo:Todo){		
		this.todoCompleted.emit(todo);
	}
	detailHandler(item){
		//let's pretend we have no item
		console.log(this.itemLabel);
		let label:string = this.itemLabel.textContent;
		
	}

  ngOnInit() {
  }

}
