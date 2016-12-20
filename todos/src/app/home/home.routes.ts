import { Routes } from '@angular/router';
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';

export const HOME_ROUTES: Routes = [
	{path: 'detail/:name', component: TodoDetailComponent },
	{path: 'edit/:name',  component: TodoEditComponent }
];