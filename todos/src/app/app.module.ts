import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routing';
import { SubjectformComponent } from './subjectform/subjectform.component';
import { HomeComponent } from './home/home.component';
import { TodoDetailComponent } from './home/todo-detail/todo-detail.component';
import { TodoEditComponent } from './home/todo-edit/todo-edit.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HttpService } from './services/http.service';
import { CrazyListComponent } from './crazy-list/crazy-list.component';
import { DdFormComponent } from './dd-form/dd-form.component';
import { MaterialModule } from '@angular/material'
import { FormDDGuard, DialogResultExampleDialog } from './dd-form/dd-form.guard';
import { AboutGuard } from './about/about.guard';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    HeaderComponent,
    AboutComponent,
    SubjectformComponent,
    HomeComponent,
    TodoDetailComponent,
    TodoEditComponent,
    HighlightDirective,
    CrazyListComponent,
    DdFormComponent,
    DialogResultExampleDialog
  ],
  entryComponents: [DialogResultExampleDialog],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing
  ],
  providers: [HttpService, FormDDGuard, AboutGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
