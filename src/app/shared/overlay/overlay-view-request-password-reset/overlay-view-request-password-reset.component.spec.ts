import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayViewRequestPasswordResetComponent } from './overlay-view-request-password-reset.component';

describe('OverlayViewRequestPasswordResetComponent', () => {
  let component: OverlayViewRequestPasswordResetComponent;
  let fixture: ComponentFixture<OverlayViewRequestPasswordResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayViewRequestPasswordResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayViewRequestPasswordResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
