import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SiteComponent } from './auth/site/site.component';
import { ContactComponent } from './auth/contact/contact.component';
import { AboutComponent } from './auth/about/about.component';
import { HobbiesComponent } from './auth/hobbies/hobbies.component';
import {AppRoutingModule} from './app.routing'
@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    ContactComponent,
    AboutComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
