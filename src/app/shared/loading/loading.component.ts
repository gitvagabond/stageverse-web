import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PubSubService } from '../../core/pub-sub.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
        display: 'none',
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        style({
          display: 'block',
        }),
        animate('0.2s') 
      ])
    ])
  ]
})
export class LoadingComponent implements OnInit {

  isLoading: Boolean = true;

  constructor(
    private _pubSubService: PubSubService) {
  }

  ngOnInit(): void {
    this.initHandlers();
  }

  private initHandlers() {
    this._pubSubService.isLoading.subscribe((isLoading: boolean) => {
      this.isLoading = isLoading;
    });

  }

}