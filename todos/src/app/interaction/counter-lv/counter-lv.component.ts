import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-lv',
  templateUrl: './counter-lv.component.html',
  styleUrls: ['./counter-lv.component.css']
})
export class CounterLvComponent implements OnInit {
  private counter:number = 100;
  constructor() { }

  ngOnInit() {
  }

  minus(){
  	this.counter--;
  }

}
