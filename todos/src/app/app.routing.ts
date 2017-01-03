import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CrazyListComponent } from './crazy-list/crazy-list.component';
import { DdFormComponent } from './dd-form/dd-form.component';
import { AboutComponent } from './about/about.component';
import { HOME_ROUTES } from './home/home.routes';
import { FormDDGuard } from './dd-form/dd-form.guard';
import { AboutGuard } from './about/about.guard';

const APP_ROUTES: Routes = [
	{ path:'', component: HomeComponent },
	{ path:'', component: HomeComponent, children: HOME_ROUTES },
	{ path:'crazylist', component: CrazyListComponent },
	{ path:'ddform', component: DdFormComponent, canActivate: [FormDDGuard]},
	{ path:'about', component: AboutComponent, canDeactivate: [AboutGuard]},

];

export const routing = RouterModule.forRoot(APP_ROUTES);