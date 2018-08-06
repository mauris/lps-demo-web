import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta, TransferState, makeStateKey } from '@angular/platform-browser';

@Component({
  template: require('./about.page.pug')
})
export class AboutPage {
  constructor(
    private title: Title,
    private meta: Meta,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    title.setTitle('About LPS and lps.js');
  }
}
