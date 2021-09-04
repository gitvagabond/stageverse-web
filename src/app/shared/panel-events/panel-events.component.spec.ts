import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelEventsComponent } from './panel-events.component';

describe('PanelEventsComponent', () => {
  let component: PanelEventsComponent;
  let fixture: ComponentFixture<PanelEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
