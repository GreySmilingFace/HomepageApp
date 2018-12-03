import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeenAComponent } from './teen-a.component';

describe('TeenAComponent', () => {
  let component: TeenAComponent;
  let fixture: ComponentFixture<TeenAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeenAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeenAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
