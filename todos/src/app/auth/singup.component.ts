import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from "@angular/forms";
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
    
@Component({
  selector: 'app-singup',
  template: `
        <h3>Please sign up to use all features</h3>
        <form [formGroup]="singupForm" (ngSubmit)="onSignup()">
            
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

  <div class="input-group">
           <md-input-container class="example-full-width lagger">
            <input formControlName="confirmPassword" type="password"  md-input placeholder="confirm Password">            
          </md-input-container>
  </div>                       
            <button md-raised-button type="submit" [disabled]="!singupForm.valid">Sign Up</button>
        </form>
    `,
    styles: ['form { padding-left: 20px; }']
})
export class SingupComponent implements OnInit {
  singupForm:FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService,private router:Router) { }


  ngOnInit() {
    this.singupForm = new FormGroup({
       password: new FormControl('', Validators.required),
       email: new FormControl('', Validators.required),
       confirmPassword: new FormControl('', Validators.required)

    });
  }

  onSignup(){
    this.auth.singup(this.singupForm.value);
    this.router.navigate(['/']);
  }

}
