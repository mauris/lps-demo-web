import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-toolbar',
  template: require('./toolbar.component.pug')
})

export class CommonToolbarComponent {
  @Input() active: string;

  constructor(
    private router: Router
  ) {
  }
}
