auth.model.ts

export interface Widget {
  id: number,
  name: string,
  price: number
}


appstore.model.ts

import {Item} from './item.model';
import {Widget} from "./widget.model";

export interface AppStore {
  items: Item[];
  selectedItem: Item;
  widgets: Widget[];
  selectedWidget: Widget;
};


auth.http.service.ts


import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import {Widget} from "../models/widget.model";

const BASE_URL = 'http://localhost:9002/login/';
const HEADER = { headers: new Headers({ 'Content-Type': 'application/json' }) };

@Injectable()
export class WidgetsService {
  widgets: Widget[] = [];

  constructor(private http: Http) {}

  add(widget: Widget){
    // this.widgets = [...this.widgets, widget];
    return this.http.post(BASE_URL, JSON.stringify(widget), HEADER)
    .map(res => res.json())
    .do(data => {
      this.widgets = [...this.widgets, data];
      return data;
    });
  }

  loadWidgets() {
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .do(json => this.auth.dispatch('LOAD_AUTH'))
    }
 
  loadWidgets() {
    return this.http.get(BASE_URL)
      .map(res => res.json())
      .do(json => this.widgets = [...this.widgets, ...json])
    }
}
