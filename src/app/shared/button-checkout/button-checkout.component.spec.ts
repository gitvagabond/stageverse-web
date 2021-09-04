import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonCheckoutComponent } from './button-checkout.component';

describe('ButtonCheckoutComponent', () => {
  let component: ButtonCheckoutComponent;
  let fixture: ComponentFixture<ButtonCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
