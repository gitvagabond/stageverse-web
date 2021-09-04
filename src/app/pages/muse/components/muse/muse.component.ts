import { Component, OnInit, Renderer2 } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PubSubService } from 'src/app/core/pub-sub.service';
import { BackgroundService } from 'src/app/shared/background/background.service';
import { ModalService } from 'src/app/shared/overlay/modal.service';
import { OverlayViewEarlyAccessComponent } from 'src/app/shared/overlay/overlay-view-early-access/overlay-view-early-access.component';

import { EmailService } from '../../../../services/email/email.service';
@Component({
  selector: 'app-muse',
  templateUrl: './muse.component.html',
  styleUrls: ['./muse.component.scss']
})
export class MuseComponent implements OnInit {
  title = 'owlcarouselinAngular';  
  Images = ['../assets/images/Carousel1.jpeg', '../assets/images/Carousel2.jpeg', '../assets/images/Carousel3.jpeg'];  
  panelOpenState: boolean = false;
  SlideOptions = { items: 1, dots: true, nav: true };  
  CarouselOptions = { items: 3, dots: true, nav: true }; 
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
        stagePadding: 15,
        dots: false,
        nav: false,
      },
      350: {
        items: 1,
        stagePadding: 15,
        dots: false,
        nav: false,
      },
      400: {
        items: 1,
        stagePadding: 15,
        dots: false,
        nav: false,
      },
      450: {
        items: 1,
        stagePadding: 15,
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
  menu:boolean=false;
  constructor(private _pubSubService: PubSubService,
    private _renderer: Renderer2,
    private _backgroundService: BackgroundService,
    private _modalService: ModalService,
    public _mail:EmailService) { }


  ngOnInit() {

  }

  showEarlyAccess(): void {
    // this.handleOverlayOpen();
    this._modalService.showModal(OverlayViewEarlyAccessComponent, {
      allowOverlayClick: true,
      modalElementId: 'early-access-modal',
      showCloseButton: true,
      data: {
        modalTitle: 'This is the sample modal'
      },
      whenClosed: () => {
        // this.handleOverlayClose();
      }
    });
  }



}
