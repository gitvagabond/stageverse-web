import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../../services/scroll/scroll.service';

@Component({
  selector: 'app-page',
  template: '<div></div>',
  styles: []
})
export class PageComponent implements OnInit {

  constructor(
    private _scrollService: ScrollService
  ) { }

  ngOnInit(): void {
  }

  scrollTo(elementId: string) {
    this._scrollService.scrollY.emit(document.getElementById(elementId).getBoundingClientRect().top);
  }

}
