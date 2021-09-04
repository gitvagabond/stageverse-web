import { Component, OnInit, AfterViewInit, ElementRef, Input } from '@angular/core';
import { PubSubService } from '../../core/pub-sub.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, AfterViewInit {
  @Input() isReducedView: boolean = false;
  isDarkScheme: boolean = false;

  constructor(
    private _pubSubService: PubSubService,
    private _element: ElementRef
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initHandlers();
  }

  private initHandlers() {
    this._pubSubService.isFooterDarkScheme.subscribe((isDarkScheme: boolean) => {
      this.isDarkScheme = isDarkScheme;
    });
    this._pubSubService.setFooterBackgroundColor.subscribe((backgroundColor: string) => {
      this._element.nativeElement.style.backgroundColor = backgroundColor;
    });
    this._pubSubService.resetFooterBackgroundColor.subscribe(() => {
      this._element.nativeElement.style.backgroundColor = 'inherit';
    });
  }

}
