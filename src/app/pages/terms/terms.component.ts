import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../../shared/page/page.component';
import { setupTestingRouter } from '@angular/router/testing';
import { ScrollService } from '../../services/scroll/scroll.service';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent extends PageComponent implements OnInit {

  menu:boolean=false;
  constructor(_scrollService: ScrollService) { 
    super(_scrollService);
  }

  ngOnInit(): void {
  }

}
