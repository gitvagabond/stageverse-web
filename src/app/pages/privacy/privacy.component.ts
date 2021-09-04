import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PageComponent } from '../../shared/page/page.component';
import { ScrollService } from '../../services/scroll/scroll.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent extends PageComponent implements OnInit, AfterViewInit {

  menu:boolean=false;
  constructor(_scrollService: ScrollService) {
    super(_scrollService);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    
  }

}
