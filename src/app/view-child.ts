import {Component, Directive, Input, ViewChild} from '@angular/core';

@Directive({selector: 'pane-view-child'})
export class PaneViewChild {
  @Input() id: string;
}

@Component({
  selector: 'example-app',
  template: `
    <pane-view-child id="1" *ngIf="shouldShow"></pane-view-child>
    <pane-view-child id="2" *ngIf="!shouldShow"></pane-view-child>

    <button (click)="toggle()">Toggle</button>

    <div>Selected: {{selectedPane}}</div>
  `,
})
export class ViewChildComp {
  @ViewChild(PaneViewChild)
  set pane(v: PaneViewChild) {
    setTimeout(() => { this.selectedPane = v.id; }, 0);
  }
  selectedPane: string = '';
  shouldShow = true;
  toggle() { this.shouldShow = !this.shouldShow; }
}
