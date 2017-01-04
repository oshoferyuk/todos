import { Component, OnInit } from '@angular/core';
import { SLAVES, ISlave } from '../model/Slaves';

@Component({
  selector: 'hero-parent-setter',
  templateUrl: './hero-parent-setter.component.html',
  styleUrls: ['./hero-parent-setter.component.css']
})
export class HeroParentSetterComponent implements OnInit {

  master:string = 'Hero Master SETTER';
  slaves:ISlave[];
  
  constructor() { }

  ngOnInit() {
  this.slaves = SLAVES;
  //ho-ho-ho, lets remove 
  this.slaves[1].name = '';  
  	console.log(this.slaves);
  }

}
