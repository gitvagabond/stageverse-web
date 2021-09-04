import { Component, Renderer2, OnInit, AfterViewInit, AfterContentChecked, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, NavigationCancel, NavigationError } from '@angular/router';
import { PubSubService } from './core/pub-sub.service';
import { ModalService } from './shared/overlay/modal.service';
import { ScrollService } from './services/scroll/scroll.service';
import { BackgroundService } from './shared/background/background.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import AOS from 'aos';
// Add GTM component
import { Angulartics2GoogleTagManager } from 'angulartics2/gtm';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentChecked {
  @ViewChild('site') private _site: ElementRef;
  @ViewChild('page') private _page: ElementRef;

  title = 'stage-web-app';
  private _SITE_currentScrollY: number = 0;
  private _SITE_lastScrollYBeforeOverlayOpened: number = 0;
  private _restoreScrollOnOverlayClose: boolean = true;

  isOverlayActive: boolean = false;

  resize$ = new Subject<void>();

  private _UAChecked: boolean = false;
  private _chrome: boolean = false;
  private _iOSSafari: boolean = false;

  private debounceTimeout: any = null;

  constructor(
    private _renderer: Renderer2,
    private _pubSubService: PubSubService,
    private _router: Router,
    private _modalService: ModalService,
    private _backgroundService: BackgroundService,
    private _scrollService: ScrollService,
    angulartics2GoogleTagManager: Angulartics2GoogleTagManager
  ) {
    angulartics2GoogleTagManager.startTracking();
  }

  ngOnInit() {

    // initialize animate on scroll (AOS)
    AOS.init();

    this.initHandlers();
  }

  ngAfterViewInit() {
    this.calculateViewport();
  }

  ngAfterContentChecked() {

  }

  scrollToElememt(elementId: string) {
    var topOfElement = document.getElementById(elementId).offsetTop;
    this._site.nativeElement.scroll({ top: topOfElement, behavior: "smooth" });
  }

  scrollY(y: number, offsetNav: boolean = true) {
    var navOffset = offsetNav ? document.getElementById("page-header").offsetHeight : 0;
    var scrollTop = this._SITE_currentScrollY + y - navOffset;
    this._site.nativeElement.scroll({ top: scrollTop, behavior: "smooth" });
  }
 
  scrollTop(scrollTop: number) {
    this._site.nativeElement.scrollTop = scrollTop;
  }

  onSiteScroll(event): void {
    this._SITE_currentScrollY = event.srcElement.scrollTop;
    this._pubSubService.siteScrolled.emit(this._SITE_currentScrollY);

    /* note this is a very bad HACK that is needed as the component doesn't 
      yet allow to specify a scroll container for which to attach itself 
      to other than window (in our case this is #site and not window) */
    AOS.refresh();
  }

  @HostListener('window:orientationchange', ['$event'])
  onWindowOrientationChange(event) {
    this.calculateViewport();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event) {
    clearTimeout(this.debounceTimeout);
    this.debounceTimeout = setTimeout(() => {
      this.calculateViewport();
    }, 100);
  }

  private initHandlers() {
    this._scrollService.scrollToElement.subscribe((elementId: string) => {
      this.scrollToElememt(elementId);
    });
    this._scrollService.scrollY.subscribe((y: number) => {
      this.scrollY(y);
    });

    this._modalService.overlayCloseEnded.subscribe(() => {
      this.handleOverlayClose();
    });
    this._modalService.overlayOpenStarted.subscribe(() => {
      this.handleOverlayOpen();
    });


    this._router.events
      .subscribe(event => {
        switch (true) {
          case event instanceof NavigationStart: {

            // var url = (event as NavigationStart).url;
            // console.log("(event as NavigationStart).url: " + (event as NavigationStart).url);
            // if (url.indexOf("#") >= 0) {
              // var fragment = url.substr(url.indexOf("#") + 1, url.length - url.indexOf("#"));
              // console.log("fragemtn: " + fragment);
              // this.scrollTo(fragment);
            // } else {
              // scroll the page to the top every time the route changes
              this._pubSubService.isLoading.emit(true);
              this.scrollTop(0);  
            // }
          
            // don't restore scroll position if there's a page change happening
            this._restoreScrollOnOverlayClose = false;
            this._modalService.closeOverlay.emit();
            this._backgroundService.hideVideo();
            this._backgroundService.showImage();
            break;
          }
          case event instanceof NavigationEnd:
          case event instanceof NavigationCancel:
          case event instanceof NavigationError: {
            this._pubSubService.isLoading.emit(false);
            break;
          }
          default: {
            break;
          }
        }
      });
  }

  private handleOverlayOpen() {
    this._restoreScrollOnOverlayClose = true;
    this._SITE_lastScrollYBeforeOverlayOpened = this._SITE_currentScrollY;
    this._renderer.addClass(this._site.nativeElement, "overlay-active");
    this._renderer.addClass(this._page.nativeElement, "vp-max-height");
    this._site.nativeElement.scrollTop = 0;
    this._page.nativeElement.scrollTop = this._SITE_lastScrollYBeforeOverlayOpened;
  }
  private handleOverlayClose() {
    setTimeout(() => {
      this._renderer.removeClass(this._site.nativeElement, "overlay-active");
      this._renderer.removeClass(this._page.nativeElement, "vp-max-height");
      if (this._restoreScrollOnOverlayClose) {
        this._site.nativeElement.scrollTop = this._SITE_lastScrollYBeforeOverlayOpened;
        this._restoreScrollOnOverlayClose = true;
      }
    });
  }

  private calculateViewport() {
    var styleTag = document.getElementById('viewport-styles'),
      documentContainer = document.documentElement,
      existingText = styleTag.innerHTML,
      retrigger = true,
      styleText = '',
      fontSize,
      container, gutter, height, width, ua, iOS, webkit;

    if (!this._UAChecked) {
      ua = window.navigator.userAgent,
        iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i),
        webkit = !!ua.match(/WebKit/i),
        this._chrome = !!ua.match(/Chrome/i),
        this._iOSSafari = iOS && webkit;
      this._UAChecked = true;
    }
    if (this._iOSSafari) {
      styleText += '#site {';
      styleText += 'height:' + window.innerHeight + 'px;';
      styleText += 'width:' + window.innerWidth + 'px;';
      styleText += '}';
      styleText += '#site #page {';
      styleText += 'min-height:' + window.innerHeight + 'px !important;';
      styleText += 'width:' + window.innerWidth + 'px !important;';
      styleText += '}';
      styleText += '#site #overlay {';
      styleText += 'min-height:' + window.innerHeight + 'px !important;';
      styleText += 'width:' + window.innerWidth + 'px !important;';
      styleText += '}';
    }
    else if (this._chrome) {
      styleText += '@media (max-width: 799px) {'
      styleText += '#site {';
      styleText += 'height:' + window.innerHeight + 'px;';
      styleText += 'width:' + window.innerWidth + 'px;';
      styleText += '}';
      styleText += '#site #page {';
      styleText += 'min-height:' + window.innerHeight + 'px !important;';
      styleText += 'width:' + window.innerWidth + 'px !important;';
      styleText += '}';
      styleText += '#site #overlay {';
      styleText += 'min-height:' + window.innerHeight + 'px !important;';
      styleText += 'width:' + window.innerWidth + 'px !important;';
      styleText += '}';
      styleText += '}';
    }
    container = document.body;
    if (container.clientHeight > 0) {
      height = container.clientHeight;
      width = container.clientWidth;
    }
    if (typeof width === 'undefined') {
      height = documentContainer.clientHeight;
      width = documentContainer.clientWidth;
    }
    if (width >= 800) {
      if (width > 1400) {
        gutter = (width - 1400) / 2;
      }
      else {
        gutter = (width % 100) / 2;
      }
    }
    if (width < 800) {
      fontSize = 14;
    }
    else if (width > 1400) {
      fontSize = 14;
    }
    else {
      fontSize = Math.floor(width / 100);
    }

    styleText += 'html { font-size: ' + fontSize + 'px; }';
    styleText += '@media(min-width: 800px) {';
    styleText += '#site .vp-gutters {';
    styleText += 'padding-left:' + gutter + 'px !important;';
    styleText += 'padding-right:' + gutter + 'px !important;';
    styleText += '}';
    styleText += '}';
    ['width', 'height'].forEach(function (key) {
      var dimension = (key === 'width') ? width : height;
      ['', 'min-', 'max-'].forEach(function (variant) {
        styleText += '#site .vp-' + variant + key + ' {';
        styleText += variant + key + ': ' + dimension + 'px !important;';
        styleText += '}';
        styleText += '@media(min-width: 800px) {';
        styleText += '#site .vp-' + variant + key + '-desktop {';
        styleText += variant + key + ': ' + dimension + 'px !important;';
        styleText += '}';
        styleText += '}';
        styleText += '@media(max-width: 799px) {';
        styleText += '#site .vp-' + variant + key + '-mobile {';
        styleText += variant + key + ': ' + dimension + 'px !important;';
        styleText += '}';
        styleText += '}';
      });
    });
    if (styleText !== existingText) {
      styleTag.innerHTML = styleText;
    }

  }

}
