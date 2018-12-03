import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Male1Component } from './male1.component';

describe('Male1Component', () => {
  let component: Male1Component;
  let fixture: ComponentFixture<Male1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Male1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Male1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
