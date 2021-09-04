import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayViewProductCollectionComponent } from './overlay-view-product-collection.component';

describe('OverlayViewProductCollectionComponent', () => {
  let component: OverlayViewProductCollectionComponent;
  let fixture: ComponentFixture<OverlayViewProductCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayViewProductCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayViewProductCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
