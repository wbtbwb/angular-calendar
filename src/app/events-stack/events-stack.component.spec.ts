import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsStackComponent } from './events-stack.component';

describe('EventsStackComponent', () => {
  let component: EventsStackComponent;
  let fixture: ComponentFixture<EventsStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
