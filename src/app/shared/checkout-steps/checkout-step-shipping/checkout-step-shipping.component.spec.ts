import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutStepShippingComponent } from './checkout-step-shipping.component';

describe('CheckoutStepShippingComponent', () => {
  let component: CheckoutStepShippingComponent;
  let fixture: ComponentFixture<CheckoutStepShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutStepShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutStepShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
