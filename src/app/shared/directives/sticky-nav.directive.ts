
import { Directive, ElementRef, Input, HostListener, Renderer2 } from '@angular/core';
import { PubSubService } from '../../core/pub-sub.service';

@Directive({
  selector: '[appStickyNav]'
})
export class StickyNavDirective {

  private sticked: boolean = true;
  private selectedOffset: number = 0;
  private windowOffsetTop: number = 0;
  private windowOffsetTopAtDirectionChange: number = 0;
  private direction: string;
  private translateX: number = 0;

  @Input() addClass: string = 'fixed';
  @Input() offSet: number = 0;

  constructor(
      private el: ElementRef,
      private render: Renderer2,
      private pubSubService: PubSubService
      ) {
    this.selectedOffset = this.el.nativeElement.offsetTop;
  }

  private addSticky() {
    this.sticked = true;
    // this.el.nativeElement.style.position = 'fixed';
    // this.el.nativeElement.style.top = this.offSet + 'px';
    this.render.addClass(this.el.nativeElement, this.addClass);
  }

  private removeSticky() {
    this.sticked = false;
    // this.el.nativeElement.style.position = '';
    this.render.removeClass(this.el.nativeElement, this.addClass);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {

    let offset: number = this.el.nativeElement.offsetTop;
    let newWindowOffsetTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let offsetChange = newWindowOffsetTop - this.windowOffsetTop;
    this.windowOffsetTop = newWindowOffsetTop;

    let direction = offsetChange > 0 ? 'up' : 'down';

    // if (this.windowOffsetTop === 0) {
    //   this.el.nativeElement.style.display = 'none';
    // } else {
    //   this.el.nativeElement.style.display = 'block';
    // }

    // console.log('oldWindowOffsetTop: ' + this.windowOffsetTop);
    // console.log('newWindowOffsetTop: ' + newWindowOffsetTop);
    // console.log('offsetChange: ' + offsetChange);
    // console.log('direction: ' + direction);
    // console.log('translateX: ' + this.translateX);

    if (direction !== this.direction) {
      // console.log('direction changed!: ' + direction);
      this.direction = direction;
      this.windowOffsetTopAtDirectionChange = newWindowOffsetTop;
    }

    // console.log('direction: ' + direction);

    if (direction === 'down') {
      // this.windowOffsetTop = this.translateX + offsetChange > 0 ? 0 : this.translateX + offsetChange;
      this.translateX = this.translateX - offsetChange > 0 ? 0 : this.translateX - offsetChange;
      // console.log("new translateX from down: " + this.translateX);
    }

    if (direction === 'up') {
      // console.log("")
      // this.windowOffsetTop = newWindowOffsetTop > 80 ? 80 : newWindowOffsetTop;
      this.translateX = this.translateX - offsetChange < -80 ? -80 : this.translateX - offsetChange;
      // console.log("new translateX from up: " + this.translateX);
    }

    // set the new position of the bar
    this.el.nativeElement.style.transform = 'translate3d(0,' + this.translateX + 'px,0)';


    this.windowOffsetTop = newWindowOffsetTop;


    // console.log('windowOffsetTop: ' + this.windowOffsetTop);
    // this.translateX(this.windowOffsetTop);

    if (this.selectedOffset === 0) {
      this.selectedOffset = offset;
    }

    if (this.sticked === false) {
      this.selectedOffset = offset;
    }

    if ((this.windowOffsetTop + this.offSet) > this.selectedOffset) {
      this.addSticky();
    } else {
      this.removeSticky();
    }

   
  }
}
