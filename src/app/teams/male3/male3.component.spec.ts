import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Male3Component } from './male3.component';

describe('Male3Component', () => {
  let component: Male3Component;
  let fixture: ComponentFixture<Male3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Male3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Male3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
