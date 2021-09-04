import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelProductCollectionComponent } from './panel-product-collection.component';

describe('PanelProductCollectionComponent', () => {
  let component: PanelProductCollectionComponent;
  let fixture: ComponentFixture<PanelProductCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelProductCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelProductCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
