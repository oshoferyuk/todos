import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  courses$ : FirebaseListObservable<any>;
  constructor(private af: AngularFire) {
    this.courses$  = af.database.list('master');

   }



  ngOnInit() {
  }

}
