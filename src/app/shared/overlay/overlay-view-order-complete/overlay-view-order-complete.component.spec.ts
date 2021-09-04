import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayViewOrderCompleteComponent } from './overlay-view-order-complete.component';

describe('OverlayViewOrderCompleteComponent', () => {
  let component: OverlayViewOrderCompleteComponent;
  let fixture: ComponentFixture<OverlayViewOrderCompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayViewOrderCompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayViewOrderCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
