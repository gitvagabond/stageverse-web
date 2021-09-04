import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutStepSignupComponent } from './checkout-step-signup.component';

describe('CheckoutStepSignupComponent', () => {
  let component: CheckoutStepSignupComponent;
  let fixture: ComponentFixture<CheckoutStepSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutStepSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutStepSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
