import { Injectable, ComponentRef, Type, EventEmitter } from '@angular/core';
import { DomService } from './dom.service';
import { OverlayViewComponent } from './overlay-view.component';
import { IModalConfig } from "./base-modal.component";
import { PubSubService } from "../../core/pub-sub.service";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private id = 0; 
  // private openOverlayViews = 0; /* how many views are currently loaded */

  closeOverlay: EventEmitter<void>;
  addViewToOverlay: EventEmitter<{ refId: number, component: Type<any>, config?: IModalConfig }>;
  removeViewFromOverlay: EventEmitter<{ refId: number }>;

  // open & close events
  overlayOpenStarted: EventEmitter<void>;
  overlayOpenEnded: EventEmitter<void>;
  overlayCloseStarted: EventEmitter<void>;
  overlayCloseEnded: EventEmitter<void>;

  constructor(private _pubSubService: PubSubService) {
    this.closeOverlay = new EventEmitter<void>();
    this.removeViewFromOverlay = new EventEmitter<{ refId: number }>();
    this.addViewToOverlay = new EventEmitter<{ refId: number, component: Type<any>, config?: IModalConfig }>();
    this.removeViewFromOverlay = new EventEmitter<{ refId: number }>();
    this.overlayOpenStarted = new EventEmitter<void>();
    this.overlayOpenEnded = new EventEmitter<void>();
    this.overlayCloseStarted = new EventEmitter<void>();
    this.overlayCloseEnded = new EventEmitter<void>();
  }
  
  // closeAllModals() {
  //   console.log('closeAllModals');
  //   for (let x = 0; x < this.openOverlayViews; x++) {
  //     console.log("closing modal id: " + x);
  //     this.closeModal(x);
  //   }
  // }

  // private openOverlayViewIds: Array<number> = [];
  // closeAllModals() {
  //   console.log('closeAllModals');
  //   for (let x = 0; x < this.openOverlayViewIds.length; x++) {
  //     console.log("closing modal id: " + x);
  //     this.closeModal(this.openOverlayViewIds[x]);
  //   }
  // }

  closeModal(refId: number): void {
    // this.openOverlayViews--;
    // if (this.openOverlayViews == 0) {
    //   console.log("calling closeOverlay...");
    //   this.closeOverlay.emit();
    // }
    // console.log("closeModal called: " + refId);
    // console.log("this.openOverlayViews: " + this.openOverlayViews);
    this.removeViewFromOverlay.emit({ refId: refId });
  }

  showModal(component: Type<any>, config?: IModalConfig): number {
    // console.log("this.openOverlayViews: " + this.openOverlayViews);
    // if (this.openOverlayViews == 0) {
    //   console.log("calling openOverlay");
    //   this.openOverlay.emit();
    // }
    /* todo: 
      (1) move this event to this service (this.overlayOpened.emit)
      (2) move triggering of this to after view has been loaded (overlay.component.ts)
    */

    // this._pubSubService.overlayOpened.emit();

    const refId = this.id;
    // console.log("modalService showModal id: " + this.id);
    this.addViewToOverlay.emit({ refId: this.id, component: component, config: config });
    // this.openOverlayViews++;
    this.id++
    return refId;
  }
}
