import { Component, OnInit, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import { PubSubService } from '../../core/pub-sub.service';
import { BackgroundService } from '../../shared/background/background.service';
import { ModalService } from '../../shared/overlay/modal.service';
import { OverlayViewEarlyAccessComponent } from '../../shared/overlay/overlay-view-early-access/overlay-view-early-access.component';
import { OverlayViewYoutubeVideoComponent } from '../../shared/overlay/overlay-view-youtube-video/overlay-view-youtube-video.component';
import { OverlayViewApiVideoComponent } from '../../shared/overlay/overlay-view-api-video/overlay-view-api-video.component';
import { OverlayViewVimeoVideoComponent } from '../../shared/overlay/overlay-view-vimeo-video/overlay-view-vimeo-video.component';
import { OwlOptions } from 'ngx-owl-carousel-o';
// import { BoxGeometry, Clock, WebGLRenderer, Scene, PerspectiveCamera, MeshLambertMaterial, Mesh, PlaneGeometry, DirectionalLight, ImageUtils, TextureLoader } from 'three';
// import * as Stats from 'stats-js';
// import videojs from 'video.js';
import { ElementRef, Renderer2, ViewChild } from '@angular/core';

import { EmailService } from '../../services/email/email.service';
import { throwError } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
// const mediaSources = require('videojs-contrib-media-sources'); increase browser support with MSE polyfill
// require('videojs-contrib-hls'); // auto attaches hlsjs handler
// const hlsjs = require('videojs-contrib-hls.js'); auto attaches hlsjs handler
// const panorama = require('videojs-panorama');

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  isHeroVideoMuted: boolean = true;
  isHeroVideoPlaying: boolean = true;
  isOverlayOpen: boolean = false;
  private _videoPlayer: any;
  // private camera;
  // private scene;
  // private renderer;
  // private geometry;
  // private material;
  // private mesh;
  // private cubeSineDriver;
  // private clock;
  // private smokeParticles;
  // private delta;
  // private stats;
  // private animateFn = this.animate;

  private debounceTimeout: any = null;


  private opacity: number = 0.1;
  private scale: number = 1.1;

  private experienceOpacity: number = 0;

  @ViewChild('heroSection') heroSection: ElementRef;
  @ViewChild('heroVideo') heroVideo: ElementRef;
  @ViewChild('deviceContainer') deviceContainer: ElementRef;
  @ViewChild('deviceVideo') deviceVideo: ElementRef;
  @ViewChild('deviceVideoBackground') deviceVideoBackground: ElementRef;
  @ViewChild('manifestoCopy') manifestoCopy: ElementRef;

  
  // @ViewChild('trailerVideo') trailerVideo: ElementRef;
  @ViewChild('experiencesSection') experiencesSection: ElementRef;
  @ViewChild('experiencesBackground') experiencesBackground: ElementRef;
  customOptions: OwlOptions = {

    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    nav: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      300: {
        items: 1,
        stagePadding: 17,
        dots: false,
        nav: false,
      },
      350: {
        items: 1,
        stagePadding: 17,
        dots: false,
        nav: false,
      },
      400: {
        items: 1,
        stagePadding: 25,
        dots: false,
        nav: false,
      },
      450: {
        items: 1,
        stagePadding: 25,
        dots: false,
        nav: false,
      },
      500: {
        items: 1,
        stagePadding: 25,
        dots: false,
        nav: false,
      },
      550: {
        items: 1,
        stagePadding: 25,
        dots: false,
        nav: false,
      },
      600: {
        items: 1,
        stagePadding: 25,
        dots: false,
        nav: false,
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
   
  }
  message:string=localStorage.getItem('message');
  emailAddress:string='';
  menu:boolean=false;
  loader:boolean=false;
  constructor(private _pubSubService: PubSubService,
    private _renderer: Renderer2,
    private _backgroundService: BackgroundService,
    private _modalService: ModalService,
    public _mail:EmailService) { }

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(event) {
  //   console.log("windows scrolling...");
  //   // console.log('deviceContainer.scrollTop: ' + this.deviceContainer.nativeElement.scrollTop);    
  // }

  // onDeviceContainerScroll(event): void {
  //   console.log("device container scroll!!");
  // }

  // @HostListener('window:resize', [])
  // onWindowResize() {
  //   clearTimeout(this.debounceTimeout);
  //   this.debounceTimeout = setTimeout(() => {
  //     console.log('finished resizing');
  //     // this.init();
  //   }, 100);
  // }
  showHide(){
    console.log('2222')
    this.menu==false ? this.menu=true : this.menu=false;
  }

  scroll(id) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    el.scrollIntoView();
  }
  sendMail(){
    if(this.validateEmail(this.emailAddress)){
    this.loader=true
    this._mail.PutEmailList(this.emailAddress).subscribe(res=>{
      console.log(res);
      this.loader=false
      this.emailAddress='';
      localStorage.setItem('message',"Thanks for signing up! We’ll keep you up-to-date with the latest news.")
      this.message="Thanks for signing up! We’ll keep you up-to-date with the latest news.";
    })
  }
  }
  validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
  handleOverlayOpen() {
    this.isOverlayOpen = true;
    // this.heroVideo.nativeElement.pause();
    // this.trailerVideo.nativeElement.pause();
  }
  handleOverlayClose() {
    this.isOverlayOpen = false;
    // this.heroVideo.nativeElement.play();
    // this.trailerVideo.nativeElement.play();
  }

  showEarlyAccess(): void {
    // this.handleOverlayOpen();
    
  }

  playFeatureTrailer(): void {
    // this.handleOverlayOpen();
    this._modalService.showModal(OverlayViewVimeoVideoComponent, {
      allowOverlayClick: true,
      showCloseButton: true,
      data: {
        modalTitle: 'This is the sample modal'
      },
      whenClosed: () => {
        // this.handleOverlayClose();
      }
    });
  }

  toggleHerVideoMute() {
    this.isHeroVideoMuted = !this.isHeroVideoMuted;
    this.heroVideo.nativeElement.muted = this.isHeroVideoMuted;
  }

  toggleHeroVideoPlaying() {
    this.isHeroVideoPlaying = !this.isHeroVideoPlaying;
    this.isHeroVideoPlaying ?
      this.heroVideo.nativeElement.play() :
      this.heroVideo.nativeElement.pause();
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

    //this._backgroundService.hide();
    this._backgroundService.hideVideo();
    this._backgroundService.hideImage();

    this.initHandlers();
  }

  ngOnDestroy() {

  }

  private initHandlers() {
    this._modalService.overlayOpenStarted.subscribe(() => {
      this.handleOverlayOpen();
    });
    this._modalService.overlayCloseStarted.subscribe(() => {
      this.handleOverlayClose();
    });
    this._pubSubService.siteScrolled.subscribe((scrollY: number) => {
      if (!this.isOverlayOpen) {
        this.handleScrollForHeroSection(scrollY);
        this.handleScrollForExperienceSection(scrollY);
        this.handleScrollForManifestoCopy(scrollY);
      }
    });
  }

  private handleScrollForHeroSection(scrollY: number) {
    const scrollTop = scrollY;
    const heroSectionScrollHeight = this.heroSection.nativeElement.scrollHeight;
    const maxScrollTop = heroSectionScrollHeight - window.innerHeight;
    const scrollFraction = (scrollTop / maxScrollTop);

    const manifestoCopyOffsetTop = this.manifestoCopy.nativeElement.offsetTop;

    // console.log("scrollY: " + scrollY);
    // console.log("top: " + top);
    // console.log("scrollTop: " + scrollTop);
    // console.log("scrollHeight: " + scrollHeight);
    // console.log("maxScrollTop: " + maxScrollTop);
    // console.log("scrollFraction: " + scrollFraction);


    /* Notes for scale math: 
        - The device container wraps a landscape device (2.1:1 aspect ratio).
        - To ensure that at max scale it covers full screen even on portrait sized devices we base height on '100vh' and then size width accordingly to aspect ratio (ie 210vh)
        - Given we scale down device in scroll sequence, different device orientations will scale differently so applying the same minScale won't work
        - To counteract this, we will set minScale based on device resolution
        */

    var opacity: number | undefined;
    var scale: number | undefined;
    // var minScale: number = 0.5;
    var maxScale: number = 1.1;
    var minOpacity: number = 0.1;
    var maxOpacity: number = 0.8;

    var minScaleWidth = window.innerWidth * .7;
    var minScale = minScaleWidth / this.deviceContainer.nativeElement.offsetWidth;

    // console.log("device with: " + this.deviceContainer.nativeElement.offsetWidth);
    // console.log("minScaleWidth: " + minScaleWidth);
    // console.log("scale should be: " + minScale);

    /* Scroll Phases 
        1) 0 - 25%: Fade to 0.8 opacity
        2) 75 - 100%: Fade to 0.1 opacity
        3) 50% - 100%: Scale to 0.25;
        */
    if (scrollFraction < .25) {
      opacity = minOpacity + (maxOpacity * (scrollFraction / .25));
    }

    if (scrollFraction > .5 && scrollFraction < .75) {
      opacity = minOpacity + (maxOpacity * (1 - ((scrollFraction - 0.5) / .25)));
    }

    if (scrollFraction < .5) {
      scale = maxScale;
    }

    if (scrollFraction > .5 && scrollFraction < 1) {
      // scale = maxScale * (1 - ((scrollFraction - .5) / .5));
      scale = minScale + (maxScale * (1 - ((scrollFraction - .5) / .5)));
      // console.log("scale: " + scale);
    }

    if (scrollFraction > 1) {
      scale = minScale;
      opacity = minOpacity;
    }

    if (opacity) {
      // check that opacity never exceeds maximum or minimum 
      opacity = opacity > maxOpacity ? maxOpacity : opacity;
      opacity = opacity < minOpacity ? minOpacity : opacity;
      if (opacity != this.opacity) {
        this._renderer.setStyle(this.deviceVideoBackground.nativeElement, "opacity", opacity);
        this.opacity = opacity;
      }
    }

    if (scale) {
      // check that scale never exceeds maximum or minimum 
      scale = scale > maxScale ? maxScale : scale;
      scale = scale < minScale ? minScale : scale;
      if (scale != this.scale) {
        this._renderer.setStyle(this.deviceContainer.nativeElement, "transform", "translate3d(-50%, -50%, 0px) rotate(0deg) scale(" + scale + ")");
        this.scale = scale;
      }
    }
  }

  private handleScrollForExperienceSection(scrollY: number) {
    const scrollTop = scrollY;
    const offsetTop = this.experiencesSection.nativeElement.offsetTop;
    const scrollHeight = this.experiencesSection.nativeElement.scrollHeight;
    const maxScrollTop = scrollHeight - window.innerHeight;
    const scrollFraction = ((scrollTop - offsetTop) / maxScrollTop);

    // console.log("scrollY: " + scrollY);
    // console.log("offsetTop: " + offsetTop);
    // console.log("scrollTop: " + scrollTop);
    // console.log("scrollHeight: " + scrollHeight);
    // console.log("maxScrollTop: " + maxScrollTop);
    // console.log("scrollFraction: " + scrollFraction);

    /* Scroll Phases 
    1) 25 - 50%: Fade to 0.8 opacity
    2) 75 - 100%: Fade to 1 opacity
    */

    var opacity: number | undefined;
    var minOpacity: number = 0;
    var maxOpacity: number = 0.8;

    if (scrollFraction < .5) {
      opacity = 0;
    }

    if (scrollFraction > .25 && scrollFraction <= .5) {
      // console.log("scrollFraction in .25 - .5: " + ((scrollFraction - 0.25) / .25));
      opacity = 0.6 * ((scrollFraction - 0.25) / .25);
    }

    // if (scrollFraction > .5 && scrollFraction <= .75) {
    //   opacity = 0.8;
    // }

    if (scrollFraction > .75 && scrollFraction <= 1) {
      // console.log("scrollFraction in .75 - 1: " + ((scrollFraction - .75) / .25));
      opacity = 0.6 + (0.2 * ((scrollFraction - .75) / .25));
    }

    if (scrollFraction > 1) {
      opacity = maxOpacity;
    }

    // console.log("opacity: " + opacity);

    if (opacity !== undefined) {
      // check that opacity never exceeds maximum or minimum 
      opacity = opacity > maxOpacity ? maxOpacity : opacity;
      opacity = opacity < minOpacity ? minOpacity : opacity;
      if (opacity != this.experienceOpacity) {
        this._renderer.setStyle(this.experiencesBackground.nativeElement, "opacity", opacity);
        this.experienceOpacity = opacity;
      }
    }

  }
  openDialog() {
    this.handleOverlayOpen();
    this._modalService.showModal(OverlayViewEarlyAccessComponent, {
      allowOverlayClick: false,
      modalElementId: 'early-access-modal',
      showCloseButton: false,
      data: {
        modalTitle: 'This is the sample modal'
      },
      whenClosed: () => {
        // this.handleOverlayClose();
      }
    });
  }
  private handleScrollForManifestoCopy(scrollY: number) {
    const bottomPageOffsetBeforeApplyingTransform = 50;
    const scrollTop = scrollY;
    const offsetTop = this.manifestoCopy.nativeElement.offsetTop;
    const scrollHeight = this.manifestoCopy.nativeElement.scrollHeight;
    const scrollYBottomScreen = scrollY + window.innerHeight - bottomPageOffsetBeforeApplyingTransform;
    const scrollFraction = (scrollYBottomScreen - offsetTop) / scrollHeight;

    // console.log("scrollYBottomScreen: " + scrollYBottomScreen);
    // console.log("scrollFrac: " + scrollFraction);
    // console.log("scrollY: " + scrollY);
    // console.log("offsetTop: " + offsetTop);

    var opacity: number | undefined;
    var scale: number | undefined;

    opacity = scrollFraction < 0 ? 0 : scrollFraction > 1 ? 1 : scrollFraction;
    this._renderer.setStyle(this.manifestoCopy.nativeElement, "opacity", opacity);

    if (scrollFraction < 0) {
      scale = 1.2;
    } else if (scrollFraction > 1) {
      scale = 1;
    } else {
      scale = 1.2 - (.2 * scrollFraction);
    }

    this._renderer.setStyle(this.manifestoCopy.nativeElement, "transform", "translate(0px, 0px) scale(" + scale + ", " + scale + ")");

  }

}
