import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModule as CommonAppModule } from '../common';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components';

import { HomePage, AboutPage } from './pages';

import { AnsiHtmlPipe } from './utility';

import { AppLPSTimelineComponent } from './components';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    CommonAppModule,
    BrowserModule.withServerTransition({
      appId: 'lps-demo'
    }),
    TransferHttpCacheModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomePage, pathMatch: 'full'},
      { path: 'about', component: AboutPage, pathMatch: 'full'}
    ])
  ],
  declarations: [
    AppComponent,
    AppLPSTimelineComponent,
    AnsiHtmlPipe,
    HomePage,
    AboutPage
  ]
})
export class AppModule {}
