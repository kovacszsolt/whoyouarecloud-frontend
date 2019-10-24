import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FinishModel} from '../models/finish.model';
import {finishData} from '../data/finish.data';

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss']
})
export class AppFinishComponent implements OnInit {
  public finish = new FinishModel({});
  public finishList = [];
  private result = '';

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.result = this.activatedRoute.snapshot.paramMap.get('result');
    this.finishList = finishData.map(i => new FinishModel(i));
    this.finish = this.finishList.find(i => i.route === this.result);
  }
}
