import { Component } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  
  todos:Todo[] = [];// = [new Todo('asdf','asdf', true), new Todo('asdf2', 'asdf2', false)];

  constructor(){}
  
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
}
