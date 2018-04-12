import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'lps-timeline',
  template: require('./timeline.component.pug')
})

export class AppLPSTimelineComponent implements OnChanges {
  @Input() result: Array<any> = [];

  private timeLabel: Array<any> = [];
  private fluents: Array<any> = [];
  private actions: Array<any> = [];
  private events: Array<any> = [];

  constructor(
    private router: Router
  ) {

  }

  ngOnChanges(changes: SimpleChanges) {
    this.timeLabel = [];
    this.fluents = [];
    this.actions = [];
    this.events = [];

    this.result.forEach((timeStep) => {
      this.timeLabel.push(timeStep.time);
      this.fluents.push(timeStep.fluents);
      this.events.push(timeStep.observations);
      this.actions.push(timeStep.actions);
    })
  }
}
