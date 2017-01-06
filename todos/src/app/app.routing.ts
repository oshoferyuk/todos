import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { CrazyListComponent } from './crazy-list/crazy-list.component';
import { DdFormComponent } from './dd-form/dd-form.component';
import { AboutComponent } from './about/about.component';
import { HOME_ROUTES } from './home/home.routes';
import { FormDDGuard } from './dd-form/dd-form.guard';
import { AboutGuard } from './about/about.guard';
import { InteractionComponent } from './interaction/interaction.component';
import { SinginComponent } from './auth/singin.component';
import { SingupComponent } from './auth/singup.component';

const APP_ROUTES: Routes = [
	{ path:'', component: HomeComponent },
	{ path:'', component: HomeComponent, children: HOME_ROUTES },
	{ path:'crazylist', component: CrazyListComponent },
	{ path:'interaction', component: InteractionComponent },
	{ path:'ddform', component: DdFormComponent, canActivate: [FormDDGuard]},
	{ path:'about', component: AboutComponent, canDeactivate: [AboutGuard]},
	

	{ path:'signin', component: SinginComponent },
	{ path:'signup', component: SingupComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);