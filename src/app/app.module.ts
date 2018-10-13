import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterializeModule } from 'angular2-materialize';

import { NavigationComponent } from './navigation.component';
import { ProjectsComponent } from './projects.component';
import { ContactComponent } from './contact.component';
import { AboutComponent } from './about.component';
import { FootersComponent } from './footers.component';
import { HomeComponent } from './home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home menu' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About me' }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { title: 'Projects' }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact' }
  }

];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProjectsComponent,
    ContactComponent,
    FootersComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
