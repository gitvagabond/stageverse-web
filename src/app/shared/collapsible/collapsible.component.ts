import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.scss']
})
export class CollapsibleComponent implements OnInit {

  isCollapsed: boolean = true;

  constructor() { }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
  }

  ngOnInit(): void {
  }

}
