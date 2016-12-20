import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { HomeComponent } from './home/home.component';
import { TodoDetailComponent } from './home/todo-detail/todo-detail.component';
import { TodoEditComponent } from './home/todo-edit/todo-edit.component';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    HeaderComponent,
    AboutComponent,
    HomeComponent,
    TodoDetailComponent,
    TodoEditComponent,
    HighlightDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
