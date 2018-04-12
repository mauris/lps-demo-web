import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components';
import { HttpModule } from '@angular/http';
import { AppModule } from './app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({
      appId: 'lps-demo'
    }),
    AppModule
  ]
})
export class BrowserAppModule {}
