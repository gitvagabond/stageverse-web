import { Component, OnInit, AfterViewInit, Type, ComponentRef, Output, QueryList, EventEmitter, ElementRef, ViewChild, ViewChildren, HostBinding, HostListener, ComponentFactoryResolver, Renderer2, ComponentFactory, ViewContainerRef, Injectable, ApplicationRef, Injector, EmbeddedViewRef } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ModalContentDirective } from './modal-content.directive';
import { PubSubService } from '../../core/pub-sub.service';
import { ModalService } from './modal.service';
import { OverlayViewComponent } from './overlay-view.component';
import { IModalConfig } from "./base-modal.component";

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
        display: 'none',
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        style({
          display: 'block',
        }),
        animate('0.2s')
      ])
    ])
  ]
})
export class OverlayComponent implements OnInit, AfterViewInit {

  isVisible: boolean = undefined;

  // private viewStack: 
  private openOverlayViews: { [refId: number]: ComponentRef<OverlayViewComponent> } = {};
  private componentRefs: { [key: number]: ComponentRef<any> } = {};
  private visibleViewId: number | undefined;

  @ViewChild("overlay") private _overlayEl: ElementRef;
  @ViewChild("overlayBackground") private _overlayBackgroundEl: ElementRef;

  // @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
  //   this.openOverlayViews[this.visibleViewId].instance.closeModal();
  //   // this.closeView(this.visibleViewId);
  // }

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private renderer: Renderer2,
    private _pubSubService: PubSubService,
    private _modalService: ModalService,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {
  }

  captureStartEvent(event: AnimationEvent) {
    
  }

  captureDoneEvent(event: AnimationEvent) {
    if (this.isVisible === undefined) {
      // initial load of component
      this.isVisible = false;
      return;
    }
    if (!this.isVisible) {
      this._modalService.overlayCloseEnded.emit();
    } else {
      this._modalService.overlayOpenEnded.emit();
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initHandlers();
  }

  closeView(refId: number): void {    
    this.removeViewComponent(refId);
    this.showPreviousView();
  }

  getModalContentInstance(refId: number): any {
    return !!this.openOverlayViews[refId] ? this.openOverlayViews[refId].instance.componentInstance.instance : null;
  }

  private setConfig(refId: number, config: IModalConfig): void {
    this.openOverlayViews[refId].instance.modalElementId =
      'modalElementId' in config ? config.modalElementId : this.openOverlayViews[refId].instance.modalElementId;

    this.openOverlayViews[refId].instance.allowOverlayClick =
      'allowOverlayClick' in config ? !!config.allowOverlayClick : this.openOverlayViews[refId].instance.allowOverlayClick;

    this.openOverlayViews[refId].instance.showCloseButton =
      'showCloseButton' in config ? !!config.showCloseButton : this.openOverlayViews[refId].instance.showCloseButton;

    if ('whenClosed' in config) {
      this.openOverlayViews[refId].instance.whenOverlayClicked$.subscribe(() => {
        if (!!config.whenClosed) {
          config.whenClosed();
        }
      });
    }

    if ('data' in config) {
      this.openOverlayViews[refId].instance.data = config.data;
    }
  }

  showView(refId: number, component: Type<any>, config?: IModalConfig): number {
    this.showOverlay();
    this.hideVisibleView();
    this.appendViewComponent(refId, OverlayViewComponent);
    this.openOverlayViews[refId] = this.getViewComponent(refId) as ComponentRef<OverlayViewComponent>;
    this.openOverlayViews[refId].instance.component = component;
    if (config) {
      this.setConfig(refId, config);
    }
    this.openOverlayViews[refId].instance.whenOverlayClicked$.subscribe(() => {
      this.closeView(refId);
    });
    this.visibleViewId = refId;
    return refId;
  }

  private initHandlers() {

    this._modalService.closeOverlay.subscribe(() => {
      // todo: remove all open overlay views
      this.hideOverlay();
      
    });

    this._modalService.addViewToOverlay.subscribe((data: { refId: number, component: Type<any>, config?: IModalConfig }) => {
      this.showView(data.refId, data.component, data.config);
    });
    this._modalService.removeViewFromOverlay.subscribe((refId: number) => {
      this.closeView(refId);
    });
  }

  showOverlay() {
    if (!this.isVisible) {
      this._modalService.overlayOpenStarted.emit();
      setTimeout(() => {
        this.isVisible = true;
      });
    }
  }

  hideOverlay() {
    if (this.isVisible) {
      this._modalService.overlayCloseStarted.emit();
      setTimeout(() => {
        this.isVisible = false;
      });
    }
  }

  /* this needs work as currently fails if you try to open a 2nd level overlay view, close it, then reopen it again.
    will need to move to a more robust stack solution */
  showPreviousView() {
    // console.log("showPreviousView: " + (this.visibleViewId - 1));
    if (this.openOverlayViews[this.visibleViewId - 1] !== undefined) {
      // console.log("showPreviousView: showing " + (this.visibleViewId - 1));
      this.openOverlayViews[this.visibleViewId - 1].instance.isVisible = true;
      this.visibleViewId = this.visibleViewId - 1;
    } else {
      // console.log("showPreviousView: cant find " + (this.visibleViewId - 1));
      this.visibleViewId = undefined;
      this.hideOverlay();
    }
  }
  hideVisibleView() {

    if (this.visibleViewId !== undefined) {
      // first hide the currently visible view
      // console.log("this.visibleViewId: " + this.visibleViewId);
      // this.renderer.setStyle(this.componentRefs[this.visibleViewId].hostView, 'display', 'none');
      this.openOverlayViews[this.visibleViewId].instance.isVisible = false;

      // set the new visible view 
      // this.openOverlayViews[id].instance.isVisible = true;
      // this.renderer.removeStyle(this.componentRefs[id].hostView, 'display');
      // setTimeout(() => {
      //   this.openOverlayViews[id].instance.isVisible = true;
      // })
      
    }
    // update current visible view id
    // this.visibleViewId = id;
  }

  appendViewComponent(id: number, component: any) {
    const componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector);
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    this.renderer.appendChild(this._overlayEl.nativeElement, domElem);
    // this.renderer.appendChild(this._overlayEl.nativeElement, (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement);
    this.componentRefs[id] = componentRef;
    // console.log("adding componentRefs:" + id);
  }

  getViewComponent(id: number): ComponentRef<any> | null {
    if (this.componentRefs[id]) {
      return this.componentRefs[id];
    }
    return null;
  }

  removeViewComponent(id: number): void {
    if (this.componentRefs[id]) {
      this.renderer.removeChild(this._overlayEl.nativeElement, this.componentRefs[id].hostView);
      this.appRef.detachView(this.componentRefs[id].hostView);
      this.componentRefs[id].destroy();
      delete this.openOverlayViews[id];
    }
  }
}

