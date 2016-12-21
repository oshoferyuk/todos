import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CrazyListComponent } from './crazy-list/crazy-list.component';
import { AboutComponent } from './about/about.component';
import { HOME_ROUTES } from './home/home.routes';

const APP_ROUTES: Routes = [
	{ path:'', component: HomeComponent },
	{ path:'', component: HomeComponent, children: HOME_ROUTES },
	{ path:'crazylist', component: CrazyListComponent },
	{ path:'about', component: AboutComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);