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
	@Output() todoDelete = new EventEmitter<Todo>();
  @Output() todoTogle = new EventEmitter<Todo>();	
	@ViewChild('itemLbl') itemLabel:HTMLElement;



  constructor() { }

	onDelete(todo:Todo){		
		this.todoDelete.emit(todo);
	}
	
	onEdit(item){
		//let's pretend we have no item
		console.log(this.itemLabel);
		let label:string = this.itemLabel.textContent;
		
	}
	
	onToggle(todo:Todo){
		this.todoTogle.emit(todo);
	}
  ngOnInit() {
  }

}
