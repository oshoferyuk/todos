import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ComunicatorService } from '../services/comunicator.service';


@Component({
  selector: 'app-hero-slave-service',
  templateUrl: './hero-slave-service.component.html',
  styleUrls: ['./hero-slave-service.component.css']
})
export class HeroSlaveServiceComponent implements OnInit, OnDestroy {
  @Input() name:string;
  subscription:Subscription;
  order:string = '';
  

  constructor(private comunicator: ComunicatorService) { 

  }

  ngOnInit() {
  	this.subscription = this.comunicator.infoPC$.subscribe(order =>{
		this.order = order;		
	});
  }

  confirm(){    	
	var message:string = this.name + ' - ' + this.order;
	this.comunicator.inform(message);
  }

  ngOnDestroy(){
  	this.subscription.unsubscribe();
  }
}
