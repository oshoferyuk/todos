import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentCanDeactivate } from './about.guard';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, ComponentCanDeactivate {  
  
	private isConf: boolean = true;
  
  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  goHome(){	    
	  this.router.navigate(['/']);
  }

  canDeactivate(){  
  	console.log('deactivate guard value: ',this.isConf);
  	return this.isConf;
  }
}
