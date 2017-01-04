import { Component, OnInit } from '@angular/core';
import { SLAVES, ISlave } from '../model/Slaves';

@Component({
  selector: 'app-hero-parent',
  templateUrl: './hero-parent.component.html',
  styleUrls: ['./hero-parent.component.css']
})
export class HeroParentComponent implements OnInit {

  constructor() { }
  master:string = 'Hero Master';
  slaves:ISlave[];

  ngOnInit() {
  	this.slaves = SLAVES;
  	console.log(this.slaves);
  }
  vote(name){
    alert('Master has ' + name);
  }
}
