import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelGalleryComponent } from './panel-gallery.component';

describe('PanelGalleryComponent', () => {
  let component: PanelGalleryComponent;
  let fixture: ComponentFixture<PanelGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
