import { Component, OnInit } from '@angular/core';
import { ComunicatorService } from './services/comunicator.service';

@Component({
  selector: 'app-hero-parent-service',
  templateUrl: './hero-parent-service.component.html',
  styleUrls: ['./hero-parent-service.component.css'],
  providers: [ComunicatorService]
})
export class HeroParentServiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
