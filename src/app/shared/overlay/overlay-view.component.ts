import { Component, OnInit, AfterViewInit, Type, ComponentRef, QueryList, EventEmitter, ElementRef, ViewChild, ViewChildren, HostBinding, HostListener, ComponentFactoryResolver, Renderer2, ComponentFactory, ViewContainerRef } from '@angular/core';
import { takeWhile, takeUntil } from 'rxjs/operators';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ModalContentDirective } from './modal-content.directive';

@Component({
  selector: 'app-overlay-view',
  templateUrl: './overlay-view.component.html',
  styleUrls: ['./overlay-view.component.scss'],
  animations: [
    trigger('leaveTimer', [
      transition(
        ':leave',
        [
          style({ opacity: 1 }),
          animate('350ms linear', style({ opacity: 1 }))
        ]
      )
    ])
  ]
})
export class OverlayViewComponent implements OnInit, AfterViewInit {

  private _active = false;
  private _modal: Type<any>;

  private _componentRef: ComponentRef<any>;
  private _data: any;
  allowOverlayClick = true;
  showCloseButton = true;
  modalElementId: string = undefined;

  set data(data: any) {
    this._data = data;
    this.setData();
  }

  whenOverlayClicked$: EventEmitter<void> = new EventEmitter();

  // @ViewChild('closeButton', { static: false }) closeButton: ElementRef;
  @ViewChild('overlayView', { static: true }) overlayViewEl: ElementRef;
  @ViewChild(ModalContentDirective, { static: true }) contentContainer: ModalContentDirective;

  @HostBinding('@leaveTimer') delayDestroy() { }
  @HostListener('click', ['$event']) onOverlayClick(event: MouseEvent | TouchEvent) {
    var modalElement = document.getElementById(this.modalElementId);    
    // if (this.allowOverlayClick && !this._componentRef.location.nativeElement.contains(event.target)) {
      if (this.allowOverlayClick && modalElement && !modalElement.contains(event.target as Node)) {
      this.closeModal(event);
    }
  }

  set isVisible(isVisible: boolean) {
    if (isVisible == true) {
      this.renderer.removeStyle(this.overlayViewEl.nativeElement, 'display');
    } else {
      this.renderer.setStyle(this.overlayViewEl.nativeElement, 'display', 'none');
    }
  }

  set component(component: Type<any>) {
    if (!this._modal) {
      this._modal = component;
      this.setupContent();
    }
  }

  get componentInstance(): ComponentRef<any> {
    return this._componentRef;
  }

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
    private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this._active = true;
  }

  ngAfterViewInit(): void {
    // alert('11');
    // setTimeout(() => {
    //   this.renderer.addClass(this.overlayViewEl.nativeElement, 'fade-in');
    //   alert('xx');
    // }, 4000);
    // this.initHandlers();
  }

  closeModal(event?: MouseEvent | TouchEvent): void {
    if (!!event) {
      event.stopPropagation();
      event.preventDefault();
    }
    this.renderer.removeClass(this.overlayViewEl.nativeElement, 'fade-in');
    this.renderer.removeClass(this._componentRef.location.nativeElement, 'slide-in');
    this.whenOverlayClicked$.emit();
  }

  setData(): void {
    if (this._componentRef && 'data' in this._componentRef.instance) {
      this._componentRef.instance.data = this._data;
    }
  }

  private setupCloseListener(): void {
    if (this._componentRef && 'closeModal' in this._componentRef.instance) {
      (this._componentRef.instance.closeModal as EventEmitter<void>)
        .pipe(takeWhile(() => this._active))
        .subscribe(() => {
          this.closeModal();
        });
    }
  }

  setupContent(): void {
    if (this._modal) {
      const componentFactory: ComponentFactory<any> = this.componentFactoryResolver.resolveComponentFactory(
        this._modal
      );
      const viewContainerRef: ViewContainerRef = this.contentContainer.viewContainerRef;

      viewContainerRef.clear();
      this._componentRef = viewContainerRef.createComponent(componentFactory);
      this.setupCloseListener();
      setTimeout(() => {
        this.renderer.addClass(this.overlayViewEl.nativeElement, 'fade-in');
      });

    }
  }

}

