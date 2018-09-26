import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { TestPageComponent } from './test-page/test-page.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { EventCalendarComponent } from './event-calendar/event-calendar.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';



//calendar module


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { AboutComponent } from './about/about.component';
import { DiscussionsComponent } from './discussions/discussions.component';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { MessagesComponent } from './messages/messages.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { BooksreadComponent } from './booksread/booksread.component';
import { CompletedBooksComponent } from './completed-books/completed-books.component';
import { EbookComponent } from './ebook/ebook.component';
import { EventUsersComponent } from './event-users/event-users.component';
import { DonatePageComponent } from './donate-page/donate-page.component';
import { ShortfilmComponent } from './shortfilm/shortfilm.component';


@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    WelcomeComponent,
    EventCalendarComponent,
    AboutComponent,
    DiscussionsComponent,
    ContactComponent,
    RegisterComponent,
    MessagesComponent,
    ConferencesComponent,
    BooksreadComponent,
    CompletedBooksComponent,
    EbookComponent,
    EventUsersComponent,
    DonatePageComponent,
    ShortfilmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
     BrowserAnimationsModule,
     CalendarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
