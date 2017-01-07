import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './edit/edit.component';
import { MasterComponent } from './master.component';


const MASTER_ROUTES: Routes = [
  { path: '',
    component: MasterComponent,
    children: [
      { path: 'detail',    component: DetailComponent },
      { path: 'edit', component: EditComponent }
    ]
  }
];

export const masterRouting = RouterModule.forChild(MASTER_ROUTES);