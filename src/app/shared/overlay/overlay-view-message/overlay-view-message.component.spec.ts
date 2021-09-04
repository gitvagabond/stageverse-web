import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayViewMessageComponent } from './overlay-view-message.component';

describe('OverlayViewMessageComponent', () => {
  let component: OverlayViewMessageComponent;
  let fixture: ComponentFixture<OverlayViewMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayViewMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayViewMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
