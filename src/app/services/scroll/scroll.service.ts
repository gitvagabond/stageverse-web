import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  /* id of element is passed */
  scrollToElement: EventEmitter<string>;
  scrollY: EventEmitter<number>;

  constructor() { 
    this.scrollToElement = new EventEmitter<string>();
    this.scrollY = new EventEmitter<number>();
  }

}
