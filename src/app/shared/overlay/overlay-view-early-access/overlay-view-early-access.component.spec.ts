import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayViewEarlyAccessComponent } from './overlay-view-early-access.component';

describe('OverlayViewEarlyAccessComponent', () => {
  let component: OverlayViewEarlyAccessComponent;
  let fixture: ComponentFixture<OverlayViewEarlyAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayViewEarlyAccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayViewEarlyAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
