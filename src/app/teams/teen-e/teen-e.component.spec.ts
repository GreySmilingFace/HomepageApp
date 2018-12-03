import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeenEComponent } from './teen-e.component';

describe('TeenEComponent', () => {
  let component: TeenEComponent;
  let fixture: ComponentFixture<TeenEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeenEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeenEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
