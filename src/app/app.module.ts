import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { ColortestComponent } from './colortest/colortest.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactpageComponent,
    ColortestComponent
  ],
  imports: [
    BrowserModule,
    AppBootstrapModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
