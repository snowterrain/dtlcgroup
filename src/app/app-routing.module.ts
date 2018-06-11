import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TestPageComponent } from './test-page/test-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import {EventCalendarComponent} from './event-calendar/event-calendar.component';
import { AboutComponent } from './about/about.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { BooksreadComponent } from './booksread/booksread.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'membership', component: TestPageComponent },
  { path: 'events', component: EventCalendarComponent },
  { path: 'about', component: AboutComponent },
  { path: 'forum', component: DiscussionsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'conferences', component: ConferencesComponent },
  { path: 'booksread', component: BooksreadComponent}
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }



