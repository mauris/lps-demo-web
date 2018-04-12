import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  template: require('./home.page.pug')
})
export class HomePage implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) {
  }

  ngOnInit() {
  }
}
