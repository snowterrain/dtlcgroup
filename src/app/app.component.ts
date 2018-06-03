import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestPageComponent } from './test-page/test-page.component';


const appRoutes: Routes = [
  { path: 'test-page', component: TestPageComponent}
];



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}



