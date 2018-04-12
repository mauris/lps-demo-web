import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Component({
  template: require('./home.page.pug')
})
export class HomePage {
  private source: String;
  private timeline: Array<any> = [];

  constructor(
    private title: Title,
    private http: Http,
    private meta: Meta
  ) {
  }

  execute() {
    this.http
      .post(process.env.API_ENDPOINT + '/lps/execute', { source: this.source })
      .map((response: Response) => {
        let data = response.json();
        this.timeline = data.result;
      })
      .subscribe();
  }
}
