import { Component, OnInit, OnDestroy } from '@angular/core';
import { ComunicatorService } from './services/comunicator.service';
import { Subscription } from 'rxjs/Subscription';
import { SLAVES, ISlave } from '../model/Slaves';

@Component({
  selector: 'app-hero-parent-service',
  templateUrl: './hero-parent-service.component.html',
  styleUrls: ['./hero-parent-service.component.css'],
  providers: [ComunicatorService]
})
export class HeroParentServiceComponent implements OnInit, OnDestroy {
	
	slaves:ISlave[] = SLAVES;
	orders:string[] =["jump","run","sleep","work"];
	subscription:Subscription;

  constructor(private comunicator: ComunicatorService) { }

  ngOnInit() {
  	this.subscription = this.comunicator.infoCP$.subscribe(message =>{
		alert(message);
	});
  }

  makeOrder(){
	var order_item = this.orders[Math.floor(Math.random()*this.orders.length)];
  	this.comunicator.order(order_item);
  }

  ngOnDestroy(){

  }


}
