import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent }  from './heroes.component';
import { SizerComponent }  from './sizer.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';
import  { HeroSearchComponent } from './hero-search.component';

import { Pane, Tab, ContentChildComp } from './content-child';
import { PaneViewChild, ViewChildComp } from './view-child';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    SizerComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    Pane, Tab, ContentChildComp,
    PaneViewChild, ViewChildComp],
  bootstrap: [ AppComponent ],
  providers: [ HeroService ]
})
export class AppModule {
}
