import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  counter:number = 10;
  constructor() { }

  ngOnInit() {
  }
  plus(){
  	this.counter++;
  }
  minus(){
  	this.counter--;
  }
}
