import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonModule as CommonAppModule } from '../common';
import { RouterModule } from '@angular/router';
import { PrebootModule } from 'preboot';
import { AppComponent } from './components';

import { HomePage } from './pages';

import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    CommonAppModule,
    ToastrModule.forRoot(),
    PrebootModule.withConfig({ appRoot: 'body' }),
    RouterModule.forRoot([
      { path: '', component: HomePage, pathMatch: 'full'}
    ])
  ],
  declarations: [
    AppComponent,
    HomePage
  ]
})
export class AppModule {}
