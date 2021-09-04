import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCreditCardBoxComponent } from './input-credit-card-box.component';

describe('InputCreditCardBoxComponent', () => {
  let component: InputCreditCardBoxComponent;
  let fixture: ComponentFixture<InputCreditCardBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputCreditCardBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputCreditCardBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
