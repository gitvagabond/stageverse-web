import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { PubSubService } from '../../core/pub-sub.service';
import { ModalService } from '../../shared/overlay/modal.service';
import { OverlayViewLoginComponent } from '../../shared/overlay/overlay-view-login/overlay-view-login.component';
import { OverlayViewGlobalMenuComponent } from '../../shared/overlay/overlay-view-global-menu/overlay-view-global-menu.component';
import { OverlayViewEarlyAccessComponent } from '../../shared/overlay/overlay-view-early-access/overlay-view-early-access.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewInit {

  theme = "DARK";
  isVisible = true;
  isFixed = true;
  isTransparent = true;

  @ViewChild('bg')
  private _bg: ElementRef;

  constructor(
    private _pubSubService: PubSubService,
    private _elementRef: ElementRef,
    private _modalService: ModalService
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.initHandlers();
  }

  showLogin(): void {
    this._modalService.showModal(OverlayViewLoginComponent, {
      allowOverlayClick: true,
      showCloseButton: true,
      data: {
        modalTitle: 'This is the sample modal'
      },
      whenClosed: () => {
        // alert('Modal has been closed');
      }
    });
  }

  showGlobalMenu(): void {
    this._modalService.showModal(OverlayViewGlobalMenuComponent, {
      allowOverlayClick: true,
      showCloseButton: true,
      data: {
        modalTitle: 'This is the sample modal'
      },
      whenClosed: () => {
        // alert('Modal has been closed');
      }
    });
  }

  showEarlyAccess(): void {
    this._modalService.showModal(OverlayViewEarlyAccessComponent, {
      modalElementId: 'early-access-modal',
      allowOverlayClick: true,
      showCloseButton: true,
      data: {
        modalTitle: 'This is the sample modal'
      },
      whenClosed: () => {
        // alert('Modal has been closed');
      }
    });
  }

  private initHandlers() {
    // this._pubSubService.isDarkScheme.subscribe((isDarkScheme: boolean) => {
    //   console.log('nav isDarkScheme: ' + isDarkScheme);
    //   this.isDarkScheme = isDarkScheme;
    // });
    // this._pubSubService.isNavVisible.subscribe((isVisible: boolean) => {
    //   this.isVisible = isVisible;
    // });
    // this._pubSubService.isNavFixed.subscribe((isFixed: boolean) => {
    //   this.isFixed = isFixed;
    // });
    // this._pubSubService.isNavTransparent.subscribe((isTransparent: boolean) => {
    //   this.isTransparent = isTransparent;
    // });
    // this._pubSubService.setNavBackgroundColor.subscribe((backgroundColor: string) => {
    //   this._bg.nativeElement.style.background = backgroundColor;
    // });
    // this._pubSubService.resetNavBackgroundColor.subscribe(() => {
    //   this._bg.nativeElement.style.background = 'inherit';
    // });
  }

}
