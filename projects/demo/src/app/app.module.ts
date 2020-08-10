import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EndPageV2Module } from '../../../../projects/endpage-v2/src/lib/endpage-v2.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EndPageV2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
