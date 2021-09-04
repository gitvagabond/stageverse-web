import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAdComponent } from './panel-ad.component';

describe('PanelAdComponent', () => {
  let component: PanelAdComponent;
  let fixture: ComponentFixture<PanelAdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelAdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
