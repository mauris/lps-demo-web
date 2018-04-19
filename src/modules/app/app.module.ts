import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModule as CommonAppModule } from '../common';
import { RouterModule } from '@angular/router';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components';

import { HomePage } from './pages';

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
      { path: '', component: HomePage, pathMatch: 'full'}
    ])
  ],
  declarations: [
    AppComponent,
    AppLPSTimelineComponent,
    HomePage
  ]
})
export class AppModule {}
