import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayViewProductDetailsComponent } from './overlay-view-product-details.component';

describe('OverlayViewProductDetailsComponent', () => {
  let component: OverlayViewProductDetailsComponent;
  let fixture: ComponentFixture<OverlayViewProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayViewProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayViewProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
