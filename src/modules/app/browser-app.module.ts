import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { AppComponent } from './components';
import { HttpModule } from '@angular/http';
import { AppModule } from './app.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    BrowserTransferStateModule,
    HttpModule,
    BrowserAnimationsModule,
    AppModule
  ]
})
export class BrowserAppModule {}
