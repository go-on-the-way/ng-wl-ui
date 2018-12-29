import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgJ2Module } from 'ng-j2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgJ2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
