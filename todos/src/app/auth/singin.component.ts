import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-singin',
  template:`<h3>Please sign up to use all features</h3>
        <form [formGroup]="signForm" (ngSubmit)="onSignin()">
            <div class="input-group">
                <label for="email">E-Mail</label>
                <input formControlName="email" type="email" id="email">
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input formControlName="password" type="password" id="password">
            </div>
            <button type="submit" [disabled]="!myForm.valid">Sign In</button>
        </form>`,
  styleUrls: ['./singin.component.css']
})
export class SinginComponent implements OnInit {
signForm:FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.signForm = this.fb.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });  
}

  onSignin() {
      
    }

}
