import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './components';
import { AppModule } from './app.module';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  imports: [
    NoopAnimationsModule,
    BrowserModule.withServerTransition({
      appId: 'lps-demo'
    }),
    ServerModule,
    AppModule
  ]
})
export class ServerAppModule {}
