import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot  } from '@angular/router';
import {Observable } from "rxjs";
import {MdDialog, MdDialogRef} from '@angular/material';
import { AuthService } from '../auth/auth.service';
import { Injectable } from '@angular/core';
import {Component} from '@angular/core';

@Injectable()
export class FormDDGuard implements CanActivate {	
	
 constructor(public dialog: MdDialog, private auth:AuthService) {}

 canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {    	
       if(!this.auth.isAuth()){
         alert('Please sign in to see this section');
         return false;
       }   	 
       let dialogRef = this.dialog.open(DialogResultExampleDialog);
    		return dialogRef.afterClosed();
    	

//return true;
    	//return confirm('Are you sure?');
  }
}



@Component({
  selector: 'dd-sure',
  template: `<h1 md-dialog-title>Guard</h1>
			<div md-dialog-content>Are you sure?</div>
			<div md-dialog-actions>
	<button md-button (click)="dialogRef.close(true)">Yes</button>
  <button md-button (click)="dialogRef.close(false)">No</button>
</div>`,
})
export class DialogResultExampleDialog {
  constructor(public dialogRef: MdDialogRef<DialogResultExampleDialog>) {}
}