import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-hero-slave-setter',
  templateUrl: './hero-slave-setter.component.html',
  styleUrls: ['./hero-slave-setter.component.css']
})
export class HeroSlaveSetterComponent implements OnInit {
  
  @Input() master:string;
  private _name:string;

	@Input() set name(name:string){
		this._name = (name && name.trim()) || '**NO NAME**';
	};  

	get name():string{
		return this._name;
	}

  constructor() { }

  ngOnInit() {
  }

}
