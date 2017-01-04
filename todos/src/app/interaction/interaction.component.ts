import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterLvComponent } from './counter-lv/counter-lv.component';
@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {

  @ViewChild(CounterLvComponent)
  count:CounterLvComponent;

  constructor() { }

  ngOnInit() {
  }

  minus(){
  	this.count.minus();
  }

}
