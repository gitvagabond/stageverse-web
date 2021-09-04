import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayViewRegisterUserComponent } from './overlay-view-register-user.component';

describe('OverlayViewRegisterUserComponent', () => {
  let component: OverlayViewRegisterUserComponent;
  let fixture: ComponentFixture<OverlayViewRegisterUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverlayViewRegisterUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverlayViewRegisterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
