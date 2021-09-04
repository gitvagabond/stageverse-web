import { Directive, Output, HostListener, EventEmitter, ElementRef } from '@angular/core';


// resources: 
// https://stackoverflow.com/a/43331477
// https://stackoverflow.com/questions/37971019/detect-scroll-event-from-inner-div/45579247 

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  @Output() setScroll = new EventEmitter();
  private scroll: number;

  constructor(private el: ElementRef) { 
    console.log("appscroll initialized!");
  }

  @HostListener('scroll', ['$event'])
  scrollIt(event) { 
    console.log("event.srcElement.scrollTop: " + event.srcElement.scrollTop);
    this.scroll = event.srcElement.scrollTop 
  }

  reset() {  this.el.nativeElement.scrollTop = this.scroll }
}