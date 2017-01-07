import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { State } from '../model/State';
import { StatusPipe } from './status.pipe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

	state:State = State.All;
  
	ngOnInit() {
  }

  todos:Todo[] = [];// = [new Todo('asdf','asdf', true), new Todo('asdf2', 'asdf2', false)];
  
  onKey(event:any){	
		if(event.key === "Enter"){
			let todo:Todo = new Todo(event.target.value, '', false);		
			this.todos.push(todo);
			event.target.value = '';
		}		
  }

  todoDelete(todo){
  	let todoIndex = 0;

  	for(let i = 0;i< this.todos.length;i++){
  		if(this.todos[i].name === todo.name){
  			todoIndex = i;
  		}
  	}

	this.todos.splice(todoIndex,1);
  }

	todoTogle(todo){
		for(let i = 0;i< this.todos.length;i++){
				if(this.todos[i].name === todo.name){
						this.todos[i].state = !this.todos[i].state; 
				}
			}
	}  

	onAll(){		
		this.state = State.All;	
}

	onActive(){
		this.state = State.Active;
	}
	
	onCompleted(){
		this.state = State.Completed;
	}
}
