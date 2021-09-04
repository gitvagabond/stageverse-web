import { Component, OnInit, AfterViewInit, OnDestroy, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';
import { PubSubService } from '../../core/pub-sub.service';
import { BackgroundService } from './background.service';
import { ModalService } from '../overlay/modal.service';
import { allowedNodeEnvironmentFlags } from 'process';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit, AfterViewInit, OnDestroy {

  isBackgroundImageVisible: boolean = false;
  isBackgroundVideoVisible: boolean = false;

  private _videoPlayer: any;

  @ViewChild("background") private _backgroundEl: ElementRef;
  @ViewChild("backgroundImage") private _backgroundImageEl: ElementRef;
  @ViewChild("backgroundVideo") private _backgroundVideoEl: ElementRef;

  constructor(private _pubSubService: PubSubService,
    private _renderer: Renderer2,
    private _builder: AnimationBuilder,
    private _backgroundService: BackgroundService,
    private _modalService: ModalService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initHandlers();
  }

  ngOnDestroy(): void {
  }

  private hide() {
    setTimeout(() => {
      this._renderer.setStyle(this._backgroundEl.nativeElement, "opacity", 0);
      this._renderer.setStyle(this._backgroundEl.nativeElement, "display", "none");
    });
  }

  private show() {
    setTimeout(() => {
      this._renderer.setStyle(this._backgroundEl.nativeElement, "opacity", 1);
    })
    this._renderer.removeStyle(this._backgroundEl.nativeElement, "display");
  }

  private initHandlers() {
    this._backgroundService.hideBackground.subscribe(() => {
      this.hide();
    });
    this._backgroundService.showBackground.subscribe(() => {
      this.show();
    });
    this._backgroundService.hideBackgroundImage.subscribe(() => {
      this.isBackgroundImageVisible = false;
    });
    this._backgroundService.showBackgroundImage.subscribe(() => {
      this.isBackgroundImageVisible = true;
    });
    this._backgroundService.hideBackgroundVideo.subscribe(() => {
      this.isBackgroundVideoVisible = false;
    });
    this._backgroundService.showBackgroundVideo.subscribe(() => {
      this.isBackgroundVideoVisible = true;
    });

    this._modalService.overlayOpenStarted.subscribe(() => {
      this.hide();
    });
    this._modalService.overlayCloseEnded.subscribe(() => {
      this.show();
    });
  }

  // fadeInAnimation(element: any) {
  //   // first define a reusable animation
  //   const myAnimation = this._builder.build([
  //     style({ opacity: 1 }),
  //     animate(2000)
  //   ]);

  //   // use the returned factory object to create a player
  //   const player = myAnimation.create(element);
  //   player.onDone(() => {
  //     console.log('done anim');
  //   });
  //   player.play();
  // }

}
