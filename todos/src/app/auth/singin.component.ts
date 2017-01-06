import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import {FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-singin',
  template:`<h3>Please sign up to use all features</h3>
        <form [formGroup]="signForm" (ngSubmit)="onSignin()">
            
  <div class="input-group">
           <md-input-container class="example-full-width lagger">
            <input formControlName="email" type="email" md-input placeholder="E-Mail">
            <!--<span *ngIf="email.errors['isTaken']">This username has already been taken</span>-->
          </md-input-container>
  </div>

  <div class="input-group">
           <md-input-container class="example-full-width lagger">
            <input formControlName="password" type="password"  md-input placeholder="Password">            
          </md-input-container>
  </div>                  
            <button md-raised-button type="submit" [disabled]="!signForm.valid">Sign In</button>
        </form>`,
        styles: ['form { padding-left: 20px; }']  
})
export class SinginComponent implements OnInit {
  signForm:FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.signForm = new FormGroup({
       password: new FormControl('', Validators.required),
       email: new FormControl('', Validators.required)
    });   
}

  onSignin() {
      this.auth.signin(this.signForm.value);
    }

}
