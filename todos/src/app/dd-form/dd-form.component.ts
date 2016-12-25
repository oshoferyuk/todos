import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dd-form',
  templateUrl: './dd-form.component.html',
  styleUrls: ['./dd-form.component.css']
})
export class DdFormComponent implements OnInit {

  userForm: FormGroup;
  constructor() { }

  ngOnInit() {
  	this.userForm = new FormGroup({
  		'username': new FormControl('Bob', Validators.required),
  		'email2': new FormControl('', Validators.required),
  		'hobby': new FormControl('books', Validators.required)
  	});
  }

	onSubmit(){		
		console.log(this.userForm);
	}
}
