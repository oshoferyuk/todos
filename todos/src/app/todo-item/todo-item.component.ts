import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
	@Input() item:Todo;	 
	@Output() todoCompleted = new EventEmitter<Todo>();
  constructor() { }

	destroyHandler(todo:Todo){		
		this.todoCompleted.emit(todo);
	}

  ngOnInit() {
  }

}
