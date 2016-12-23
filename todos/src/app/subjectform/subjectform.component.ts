import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subjectform',
  templateUrl: './subjectform.component.html',
  styleUrls: ['./subjectform.component.css']
})
export class SubjectformComponent implements OnInit {
  @Output() subjectTodo = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
	onSubmit(form:NgForm){	
		this.subjectTodo.emit(form.value);
	}
}
