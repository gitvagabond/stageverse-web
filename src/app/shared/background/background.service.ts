import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  isBackgroundVisible: boolean = false;
  isBackgroundImageVisible: boolean = false;
  isBackgroundVideoVisible: boolean = false;
  hideBackground: EventEmitter<void>;
  showBackground: EventEmitter<void>;
  hideBackgroundImage: EventEmitter<void>;
  showBackgroundImage: EventEmitter<void>;
  hideBackgroundVideo: EventEmitter<void>;
  showBackgroundVideo: EventEmitter<void>;

  hide() {
    if (this.isBackgroundVisible) {
      this.isBackgroundVisible = false;
      this.hideBackground.emit();
    }
  }
  show() {
    if (!this.isBackgroundVisible) {
      this.isBackgroundVisible = true;
      this.showBackground.emit();
    }
  }
  hideImage() {
    if (this.isBackgroundImageVisible) {
      this.isBackgroundImageVisible = false;
      this.hideBackgroundImage.emit();
    }
  }
  showImage() {
    if (!this.isBackgroundImageVisible) {
      this.isBackgroundImageVisible = true;
      this.showBackgroundImage.emit();
    }
  }
  hideVideo() {
    if (this.isBackgroundVideoVisible) {
      this.isBackgroundVideoVisible = false;
      this.hideBackgroundVideo.emit();
    }
  }
  showVideo() {
    if (!this.isBackgroundVideoVisible) {
      this.isBackgroundVideoVisible = true;
      this.showBackgroundVideo.emit();
    }
  }
  constructor() {
    this.hideBackground = new EventEmitter<void>();
    this.showBackground = new EventEmitter<void>();
    this.hideBackgroundImage = new EventEmitter<void>();
    this.showBackgroundImage = new EventEmitter<void>();
    this.hideBackgroundVideo = new EventEmitter<void>();
    this.showBackgroundVideo = new EventEmitter<void>();
  }
}
