import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Title, Meta, TransferState, makeStateKey } from '@angular/platform-browser';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

const RESULT_KEY = makeStateKey<Array<string>>('cache');

@Component({
  template: require('./home.page.pug')
})
export class HomePage implements OnInit {
  private source: String;
  private error: String = '';
  private runTime: String = '';
  private loading: boolean = false;
  private timeline: Array<any> = [];
  private preloadedPrograms: Array<string> = [];
  private programCache: Object = {};

  constructor(
    private title: Title,
    private http: Http,
    private meta: Meta,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    title.setTitle('lps.js - LPS JavaScript Interpreter Demo');
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.preloadedPrograms = this.transferState.get(RESULT_KEY, []);
      this.transferState.remove(RESULT_KEY);

      if (this.preloadedPrograms.length === 0) {
        this.loadProgramList();
      }

      return;
    }

    this.transferState.onSerialize(RESULT_KEY, () => {
      return this.preloadedPrograms;
    });
    this.loadProgramList();
  }

  loadProgramList() {
    this.loading = true;
    this.http
      .get(process.env.API_ENDPOINT + '/lps/examples')
      .map((response: Response) => {
        let data = response.json();
        this.preloadedPrograms = data.result;
        this.loading = false;
      })
      .subscribe();
  }

  loadProgram(id: Number) {
    this.error = '';
    if (this.programCache[String(id)] !== undefined) {
      this.source = this.programCache[String(id)];
      return;
    }
    this.loading = true;
    this.http
      .get(process.env.API_ENDPOINT + '/lps/examples/' + id)
      .map((response: Response) => {
        return response.json();
      })
      .subscribe(
        (data) => {
          this.source = data.result;
          this.programCache[String(id)] = this.source;
          this.loading = false;
        },
        (err) => {
          this.loading = false;
          let data = err.json();
          if (data.status !== 'error') {
            return;
          }
          this.error = data.msg;
        }
      );
  }

  execute() {
    this.error = '';
    this.loading = true;
    this.timeline = [];
    this.runTime = '';
    this.http
      .post(process.env.API_ENDPOINT + '/lps/execute', { source: this.source })
      .map((response: Response) => {
        return response.json();
      })
      .subscribe(
        (data) => {
          this.timeline = data.result;
          this.runTime = data.time;
          this.loading = false;
        },
        (err) => {
          this.loading = false;
          let data = err.json();
          if (data.status !== 'error') {
            return;
          }
          this.error = data.msg;
        }
      );
  }
}
