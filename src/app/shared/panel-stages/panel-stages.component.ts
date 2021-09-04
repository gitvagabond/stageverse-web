import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-stages',
  templateUrl: './panel-stages.component.html',
  styleUrls: ['./panel-stages.component.scss']
})
export class PanelStagesComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
