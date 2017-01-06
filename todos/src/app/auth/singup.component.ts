import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl  } from "@angular/forms";
import { AuthService } from './auth.service';

@Component({
  selector: 'app-singup',
  template: `
        <h3>Please sign up to use all features</h3>
        <form [formGroup]="singupForm" (ngSubmit)="onSignup()">
            <div class="input-group">
                <label for="email">E-Mail</label>
                <input formControlName="email" type="email" id="email" #email>
                <span *ngIf="!email.pristine && email.errors != null && email.errors['noEmail']">Invalid mail address</span>
                <!--<span *ngIf="email.errors['isTaken']">This username has already been taken</span>-->
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input formControlName="password" type="password" id="password">
            </div>
            <div class="input-group">
                <label for="confirm-password">Confirm Password</label>
                <input formControlName="confirmPassword" type="password" id="confirm-password" #confirmPassword>
                <span *ngIf="!confirmPassword.pristine && confirmPassword.errors != null && confirmPassword.errors['passwordsNotMatch']">Passwords do not match</span>
            </div>
            <button type="submit" [disabled]="!myForm.valid">Sign Up</button>
        </form>
    `  
})
export class SingupComponent implements OnInit {
  signupForm:FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
  }

}
