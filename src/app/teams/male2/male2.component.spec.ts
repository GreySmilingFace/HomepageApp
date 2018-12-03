import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Male2Component } from './male2.component';

describe('Male2Component', () => {
  let component: Male2Component;
  let fixture: ComponentFixture<Male2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Male2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Male2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
