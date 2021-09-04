import { Component, OnInit } from '@angular/core';
import { BaseModalComponent } from '../base-modal.component';

@Component({
  selector: 'app-overlay-view-global-menu',
  templateUrl: './overlay-view-global-menu.component.html',
  styleUrls: ['./overlay-view-global-menu.component.scss']
})
export class OverlayViewGlobalMenuComponent extends BaseModalComponent implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit(): void {
  }

}
