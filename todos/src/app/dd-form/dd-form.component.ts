import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

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
  		'email2': new FormControl('', [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)]),
  		'hobbies': new FormArray([
        new FormControl('Cooking', Validators.required)
        ])
  	});
  

    this.userForm.valueChanges.subscribe((c)=>console.log(c));

  }

	onSubmit(){		
		console.log(this.userForm);
	}
  
  addHobby(){
    (<FormArray>this.userForm.controls['hobbies']).push(new FormControl('', Validators.required));
  }
}
