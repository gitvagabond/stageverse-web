import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelStagesComponent } from './panel-stages.component';

describe('PanelStagesComponent', () => {
  let component: PanelStagesComponent;
  let fixture: ComponentFixture<PanelStagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelStagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
