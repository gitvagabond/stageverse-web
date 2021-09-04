import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayViewCheckoutComponent } from './overlay-view-checkout.component';

describe('OverlayViewCheckoutComponent', () => {
  let component: OverlayViewCheckoutComponent;
  let fixture: ComponentFixture<OverlayViewCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayViewCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayViewCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
