import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayViewVimeoVideoComponent } from './overlay-view-vimeo-video.component';

describe('OverlayViewVimeoVideoComponent', () => {
  let component: OverlayViewVimeoVideoComponent;
  let fixture: ComponentFixture<OverlayViewVimeoVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayViewVimeoVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayViewVimeoVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
