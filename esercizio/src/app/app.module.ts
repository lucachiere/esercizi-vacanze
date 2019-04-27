import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppuntamentiComponent } from './appuntamenti/appuntamenti.component';

@NgModule({
  declarations: [
    AppComponent,
    AppuntamentiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
