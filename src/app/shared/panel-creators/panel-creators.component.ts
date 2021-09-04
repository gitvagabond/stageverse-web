import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-creators',
  templateUrl: './panel-creators.component.html',
  styleUrls: ['./panel-creators.component.scss']
})
export class PanelCreatorsComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
