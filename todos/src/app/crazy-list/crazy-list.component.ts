import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Response } from "@angular/http";
import {Observable} from "rxjs";

import 'rxjs/Rx';
import { ITodo } from '../model/TodoModel';

@Component({
  selector: 'app-crazy-list',
  templateUrl: './crazy-list.component.html',
  styleUrls: ['./crazy-list.component.css']
})
export class CrazyListComponent implements OnInit {

  todoList:Observable<any>;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
  	this.todoList = this.httpService.getTestData();//.subscribe((data:any) => console.log(data));  	  	
 //this.httpService.getTestData().forEach(d =>console.log(d));
 }

}
