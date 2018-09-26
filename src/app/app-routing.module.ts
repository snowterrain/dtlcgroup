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
import { CompletedBooksComponent } from './completed-books/completed-books.component';
import {EbookComponent} from './ebook/ebook.component';
import {DonatePageComponent} from './donate-page/donate-page.component'
import {ShortfilmComponent} from './shortfilm/shortfilm.component'

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
  { path: 'booksread', component: BooksreadComponent},
  { path: 'cb', component: CompletedBooksComponent},
  { path: 'ebook', component: EbookComponent},
  { path: 'donate', component: DonatePageComponent},
  { path: 'shortfilm', component: ShortfilmComponent}
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  
})
export class AppRoutingModule { }



