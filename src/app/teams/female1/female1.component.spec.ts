import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Female1Component } from './female1.component';

describe('Female1Component', () => {
  let component: Female1Component;
  let fixture: ComponentFixture<Female1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Female1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Female1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
