import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgJ2Component } from './ng-j2.component';

describe('NgJ2Component', () => {
  let component: NgJ2Component;
  let fixture: ComponentFixture<NgJ2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgJ2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgJ2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
