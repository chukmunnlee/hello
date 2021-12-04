import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import player from 'lottie-web'
import { LottieModule } from 'ngx-lottie'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	  LottieModule.forRoot({ player: () => player })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
