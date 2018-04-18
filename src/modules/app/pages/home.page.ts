import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Component({
  template: require('./home.page.pug')
})
export class HomePage implements OnInit {
  private source: String;
  private timeline: Array<any> = [];
  private preloadedPrograms: Array<String> = [];

  constructor(
    private title: Title,
    private http: Http,
    private meta: Meta
  ) {
  }

  ngOnInit() {
    this.http
      .get(process.env.API_ENDPOINT + '/lps/examples')
      .map((response: Response) => {
        let data = response.json();
        this.preloadedPrograms = data.result;
      })
      .subscribe();
  }

  loadProgram(id: Number) {
    this.http
      .get(process.env.API_ENDPOINT + '/lps/examples/' + id)
      .map((response: Response) => {
        let data = response.json();
        this.source = data.result;
      })
      .subscribe();
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
