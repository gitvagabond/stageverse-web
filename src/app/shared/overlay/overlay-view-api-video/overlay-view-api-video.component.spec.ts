import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayViewApiVideoComponent } from './overlay-view-api-video.component';

describe('OverlayViewApiVideoComponent', () => {
  let component: OverlayViewApiVideoComponent;
  let fixture: ComponentFixture<OverlayViewApiVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayViewApiVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayViewApiVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
