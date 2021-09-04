import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PageComponent } from '../../shared/page/page.component';
import { ScrollService } from '../../services/scroll/scroll.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.scss']
})
export class PressComponent extends PageComponent implements OnInit, AfterViewInit {
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
  menu:boolean=false;
  constructor(_scrollService: ScrollService) {
    super(_scrollService);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }

}
