import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCollectionPickerComponent } from './product-collection-picker.component';

describe('ProductCollectionPickerComponent', () => {
  let component: ProductCollectionPickerComponent;
  let fixture: ComponentFixture<ProductCollectionPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCollectionPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCollectionPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
