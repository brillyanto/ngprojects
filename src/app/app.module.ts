import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home-component.component';

import {PassengerDashboardModule} from './passenger-dashboard/passenger-dashboard.module';

import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

const routes:Routes = [
  { path:'', component: HomeComponent, pathMatch: 'full' },
  { path:'**', component: NotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    // Angular Modules
    BrowserModule,
    RouterModule.forRoot(routes),
    //Custom Modules
    PassengerDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
