import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutStepPaymentComponent } from './checkout-step-payment.component';

describe('CheckoutStepPaymentComponent', () => {
  let component: CheckoutStepPaymentComponent;
  let fixture: ComponentFixture<CheckoutStepPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutStepPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutStepPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
