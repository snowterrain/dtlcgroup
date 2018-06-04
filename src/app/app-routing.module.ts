import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TestPageComponent } from './test-page/test-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {EventCalendarComponent} from './event-calendar/event-calendar.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'test', component: TestPageComponent },
  { path: 'events', component: EventCalendarComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }



