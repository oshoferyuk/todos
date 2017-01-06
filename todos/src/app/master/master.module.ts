import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { MasterComponent } from './master.component';
import { EditComponent } from './edit/edit.component';
import { DetailComponent } from './detail/detail.component';
import { masterRouting } from './master.routing';

@NgModule({
declarations: [MasterComponent, EditComponent, DetailComponent],
imports: [
    CommonModule,
    FormsModule,
    masterRouting]
})
export class MasterModule{

}