import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { PubSubService } from '../../core/pub-sub.service';
import { OnInit, AfterViewInit } from '@angular/core';

/**
 * This class represents the navigation bar component.
 */
@Component({
  // moduleId: module.id,
  selector: 'app-navbar',
  templateUrl: 'navbar.component.html',
  styleUrls: ['navbar.component.scss'],
})
export class NavbarComponent implements AfterViewInit {

  isDarkScheme = false;
  isVisible = true;
  isFixed = true;
  isTransparent = true;

  @ViewChild('bg')
  private _bg: ElementRef;

  constructor(
    private _pubSubService: PubSubService,
    private _elementRef: ElementRef
  ) {
  }

  ngAfterViewInit() {
    this.initHandlers();
  }

  private initHandlers() {
    this._pubSubService.isDarkScheme.subscribe((isDarkScheme: boolean) => {
      console.log('nav isDarkScheme: ' + isDarkScheme);
      this.isDarkScheme = isDarkScheme;
    });
    this._pubSubService.isNavVisible.subscribe((isVisible: boolean) => {
      this.isVisible = isVisible;
    });
    this._pubSubService.isNavFixed.subscribe((isFixed: boolean) => {
      this.isFixed = isFixed;
    });
    this._pubSubService.isNavTransparent.subscribe((isTransparent: boolean) => {
      this.isTransparent = isTransparent;
    });
    this._pubSubService.setNavBackgroundColor.subscribe((backgroundColor: string) => {
      this._bg.nativeElement.style.background = backgroundColor;
    });
    this._pubSubService.resetNavBackgroundColor.subscribe(() => {
      this._bg.nativeElement.style.background = 'inherit';
    });
  }

 }
