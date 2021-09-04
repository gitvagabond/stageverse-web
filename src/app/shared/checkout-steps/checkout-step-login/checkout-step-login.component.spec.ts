import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutStepLoginComponent } from './checkout-step-login.component';

describe('CheckoutStepLoginComponent', () => {
  let component: CheckoutStepLoginComponent;
  let fixture: ComponentFixture<CheckoutStepLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutStepLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutStepLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
