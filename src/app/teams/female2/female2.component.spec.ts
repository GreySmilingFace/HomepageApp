import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Female2Component } from './female2.component';

describe('Female2Component', () => {
  let component: Female2Component;
  let fixture: ComponentFixture<Female2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Female2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Female2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
