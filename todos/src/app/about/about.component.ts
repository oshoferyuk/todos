import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ComponentCanDeactivate } from './about.guard';
import { CONFIG1, CONFIG2 } from './values';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
    { provide: CONFIG1, useValue: CONFIG2 }
  ]
})
export class AboutComponent implements OnInit, ComponentCanDeactivate {  
  
	private isConf: boolean = true;
  
  constructor(private router:Router, @Inject(CONFIG1) public appConfig:any ) {
    console.log(this.appConfig); //== bbb, not aaa, overriten by provider
   }

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
