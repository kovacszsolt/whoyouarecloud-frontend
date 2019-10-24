import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Router} from '@angular/router';
import {GameModel} from '../models/game.model';
import {gameData} from '../data/game.data';
import {finishData} from '../data/finish.data';
import {FinishModel} from '../models/finish.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
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
export class AppGameComponent implements OnInit {
  currentRule = new GameModel({});
  rules = [];
  finishList = [];
  currentState = 'initial';

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.rules = gameData.map(i => new GameModel(i));
    this.finishList = finishData.map(i => new FinishModel(i));
    this.changeRule(1, 0);
  }

  changeRule(currentRuleId, index) {
    if (index === 1 && this.currentRule.select1last) {
      this.router.navigate(['/finish/' + this.finishList.find(i => i.id === this.currentRule.select1).route]);
    } else if (index === 2 && this.currentRule.select2last) {
      this.router.navigate(['/finish/' + this.finishList.find(i => i.id === this.currentRule.select2).route]);
    } else {
      this.currentRule = this.rules.find(i => i.id === currentRuleId);
      this.changeState();
    }
  }


  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

}
