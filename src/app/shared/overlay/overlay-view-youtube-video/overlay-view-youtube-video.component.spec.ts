import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayViewYoutubeVideoComponent } from './overlay-view-youtube-video.component';

describe('OverlayViewYoutubeVideoComponent', () => {
  let component: OverlayViewYoutubeVideoComponent;
  let fixture: ComponentFixture<OverlayViewYoutubeVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayViewYoutubeVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayViewYoutubeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
