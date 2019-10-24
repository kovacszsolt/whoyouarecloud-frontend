import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {data} from './app.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        transform: 'scale(1.5)'
      })),
      state('final', style({
        transform: 'scale(1)'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
  ]
})
export class AppComponent implements OnInit {
  currentRule = {};
  rules = [];
  currentState = 'initial';
  ngOnInit(): void {
    this.rules = data;
    this.changeRule(1);
  }

  changeRule(currentRuleId) {

    this.currentRule = this.rules.find(i => i.id === currentRuleId);
    this.changeState();
  }


  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

}
