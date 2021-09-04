import { Component, OnInit, EventEmitter, Input, Output, AfterViewInit, AfterViewChecked, HostListener } from '@angular/core';

@Component({
  selector: 'app-base-modal',
  template: '<div></div>',
  styles: []
})
export class BaseModalComponent implements AfterViewInit {
  protected _data: any;
  /* this property can be used to control the 'hidden' class on the overlay-view component for transitions */
  private _isViewHidden: boolean = true;
  showViewImmediatelyAfterInit: boolean = true; //if not the modal will control it instead

  @Output() closeModal: EventEmitter<void> = new EventEmitter();

  @Input() set data(value: any) {
    if (!!value) {
      this._data = value;
    }
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    // this.openOverlayViews[this.visibleViewId].instance.closeModal();
    // this.closeView(this.visibleViewId);
    this.close();
  }

  get isViewHidden(): boolean {
    return this._isViewHidden;
  }

  set isViewHidden(isViewHidden: boolean) {
    this._isViewHidden = isViewHidden;
  }

  get data(): any {
    return this._data;
  }

  constructor() { }

  close(): void {
    this._isViewHidden = true;
    setTimeout(() => {
      this.closeModal.emit();
    })
  }

  ngAfterViewInit() {
    if (this.showViewImmediatelyAfterInit) {
      setTimeout(() => {
        this._isViewHidden = false;
      });
    }
  }

}

export interface IModalConfig {
  /**
   * If true, will close the modal when user clicks outside.
   */
  modalElementId?: string;
  allowOverlayClick?: boolean;
  showCloseButton?: boolean;
  data?: any;
  whenClosed?(): void;
}
