import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelAboutComponent } from './panel-about.component';

describe('PanelAboutComponent', () => {
  let component: PanelAboutComponent;
  let fixture: ComponentFixture<PanelAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
