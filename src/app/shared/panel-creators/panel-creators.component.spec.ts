import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCreatorsComponent } from './panel-creators.component';

describe('PanelCreatorsComponent', () => {
  let component: PanelCreatorsComponent;
  let fixture: ComponentFixture<PanelCreatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelCreatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
