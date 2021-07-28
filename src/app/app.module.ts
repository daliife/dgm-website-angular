import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { HttpErrorInterceptor } from './http-error.interceptor'

import { AppComponent } from './app.component'
import { RouterModule, Routes } from '@angular/router'
import { MaterializeModule } from 'angular2-materialize'

import { NavigationComponent } from './navigation/navigation.component'
import { ProjectsComponent } from './projects/projects.component'
import { ContactComponent } from './contact/contact.component'
import { AboutComponent } from './about/about.component'
import { FooterComponent } from './footer/footer.component'
import { HomeComponent } from './home/home.component'

// TODO: routing working in production
// https://angular.io/api/common/PathLocationStrategy

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' },
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'About me' },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { title: 'Projects' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { title: 'Contact' },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    BrowserModule,
    MaterializeModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
