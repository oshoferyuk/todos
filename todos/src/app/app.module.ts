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
import { InteractionComponent } from './interaction/interaction.component';
import { HeroParentComponent } from './interaction/hero-parent/hero-parent.component';
import { HeroSlaveComponent } from './interaction/hero-parent/hero-slave/hero-slave.component';
import { HeroParentSetterComponent } from './interaction/hero-parent-setter/hero-parent-setter.component';
import { HeroSlaveSetterComponent } from './interaction/hero-parent-setter/hero-slave-setter/hero-slave-setter.component';
import { CounterComponent } from './interaction/counter/counter.component';
import { ChangeDetectionComponent } from './interaction/counter/change-detection/change-detection.component';
import { CounterLvComponent } from './interaction/counter-lv/counter-lv.component';
import { HeroParentServiceComponent } from './interaction/hero-parent-service/hero-parent-service.component';
import { HeroSlaveServiceComponent } from './interaction/hero-parent-service/hero-slave-service/hero-slave-service.component';
import { SinginComponent } from './auth/singin.component';
import { FooterComponent } from './footer/footer.component';
import { SingupComponent } from './auth/singup.component';
import { AuthService } from './auth/auth.service';
import {MasterModule} from './master/master.module';
import { StatusPipe } from './home/status.pipe';

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
    DialogResultExampleDialog,
    InteractionComponent,
    HeroParentComponent,
    HeroSlaveComponent,
    HeroParentSetterComponent,
    HeroSlaveSetterComponent,
    CounterComponent,
    ChangeDetectionComponent,
    CounterLvComponent,
    HeroParentServiceComponent,
    HeroSlaveServiceComponent,
    SinginComponent,
    FooterComponent,
    SingupComponent,
    StatusPipe    
  ],
  entryComponents: [DialogResultExampleDialog],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing],
  providers: [HttpService, FormDDGuard, AboutGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
