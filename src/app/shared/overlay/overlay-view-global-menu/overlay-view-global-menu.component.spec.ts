import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayViewGlobalMenuComponent } from './overlay-view-global-menu.component';

describe('OverlayViewGlobalMenuComponent', () => {
  let component: OverlayViewGlobalMenuComponent;
  let fixture: ComponentFixture<OverlayViewGlobalMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayViewGlobalMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayViewGlobalMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
