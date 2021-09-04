import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../../shared/background/background.service';

@Component({
  selector: 'app-early-access',
  templateUrl: './early-access.component.html',
  styleUrls: ['./early-access.component.scss']
})
export class EarlyAccessComponent implements OnInit {

  constructor(private _backgroundService: BackgroundService) { }

  ngOnInit(): void {
    this._backgroundService.showImage();
  }

}
