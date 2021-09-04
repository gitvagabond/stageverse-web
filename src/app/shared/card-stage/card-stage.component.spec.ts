import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStageComponent } from './card-stage.component';

describe('CardStageComponent', () => {
  let component: CardStageComponent;
  let fixture: ComponentFixture<CardStageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardStageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardStageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
