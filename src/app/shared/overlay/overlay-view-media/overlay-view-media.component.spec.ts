import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayViewMediaComponent } from './overlay-view-media.component';

describe('OverlayViewMediaComponent', () => {
  let component: OverlayViewMediaComponent;
  let fixture: ComponentFixture<OverlayViewMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayViewMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayViewMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
