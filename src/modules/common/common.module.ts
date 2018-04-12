import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MomentModule } from 'angular2-moment';

import { CommonToolbarComponent } from './components';
import { CommonFooterComponent } from './components';

@NgModule({
  imports: [
    AngularCommonModule,
    RouterModule,
    FormsModule,
    MomentModule
  ],
  declarations: [
    CommonToolbarComponent,
    CommonFooterComponent
  ],
  providers: [
  ],
  exports: [
    FormsModule,
    MomentModule,

    CommonToolbarComponent,
    CommonFooterComponent
  ]
})
export class CommonModule {}
