import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FinishModel} from '../models/finish.model';
import {finishData} from '../data/finish.data';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class AppShareComponent implements OnInit {
  public finish = new FinishModel({});
  public finishList = [];
  private result = '';
  public name = '';

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.result = this.activatedRoute.snapshot.paramMap.get('result');
    this.name = this.activatedRoute.snapshot.paramMap.get('name');
    this.finishList = finishData.map(i => new FinishModel(i));
    this.finish = this.finishList.find(i => i.route === this.result);
  }
}
