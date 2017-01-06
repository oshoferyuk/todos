import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { MasterComponent } from './master.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { masterRouting } from './master.routing';
import { AngularFireModule } from  'angularfire2/index';
import { firebaseConfig } from '../../environments/firebase.config';

@NgModule({
declarations: [MasterComponent, EditComponent, DetailComponent],
imports: [
    CommonModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    masterRouting]
})
export class MasterModule{

}