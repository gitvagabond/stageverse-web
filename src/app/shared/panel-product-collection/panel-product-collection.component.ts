import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-product-collection',
  templateUrl: './panel-product-collection.component.html',
  styleUrls: ['./panel-product-collection.component.scss']
})
export class PanelProductCollectionComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
