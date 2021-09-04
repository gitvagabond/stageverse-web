import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayViewLoginComponent } from './overlay-view-login.component';

describe('OverlayViewLoginComponent', () => {
  let component: OverlayViewLoginComponent;
  let fixture: ComponentFixture<OverlayViewLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayViewLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayViewLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
