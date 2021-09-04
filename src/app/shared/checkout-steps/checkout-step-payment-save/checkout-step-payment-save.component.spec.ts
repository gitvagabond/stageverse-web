import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutStepPaymentSaveComponent } from './checkout-step-payment-save.component';

describe('CheckoutStepPaymentSaveComponent', () => {
  let component: CheckoutStepPaymentSaveComponent;
  let fixture: ComponentFixture<CheckoutStepPaymentSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutStepPaymentSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutStepPaymentSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
