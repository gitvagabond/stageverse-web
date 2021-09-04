import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayViewProductDetailsImmersiveComponent } from './overlay-view-product-details-immersive.component';

describe('OverlayViewProductDetailsImmersiveComponent', () => {
  let component: OverlayViewProductDetailsImmersiveComponent;
  let fixture: ComponentFixture<OverlayViewProductDetailsImmersiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayViewProductDetailsImmersiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayViewProductDetailsImmersiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
