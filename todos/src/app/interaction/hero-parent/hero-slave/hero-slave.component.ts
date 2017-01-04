import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero-slave',
  templateUrl: './hero-slave.component.html',
  styleUrls: ['./hero-slave.component.css']
})
export class HeroSlaveComponent implements OnInit {
	@Input() name:string;
	@Input() master:string;
	@Output() onVoted = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  vote(name:string){  	
  	this.onVoted.emit(name);  	
  }
}
