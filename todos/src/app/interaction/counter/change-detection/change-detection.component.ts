import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit, OnChanges {
  @Input() counter:number;
  changeLog:string[] = [];
  
  constructor() { }

  ngOnInit() {
  
  }

ngOnChanges(changes: {[propKey: string]: SimpleChange}){
  //ngOnChanges(changes: SimpleChange}){
  	for (let propName in changes) {
      let changedProp = changes[propName];
      let from = JSON.stringify(changedProp.previousValue);
      let to =   JSON.stringify(changedProp.currentValue);
      this.changeLog.push( `${propName} changed from ${from} to ${to}`);
    }  	  
  }
}
