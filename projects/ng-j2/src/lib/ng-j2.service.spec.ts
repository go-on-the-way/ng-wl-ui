import { TestBed } from '@angular/core/testing';

import { NgJ2Service } from './ng-j2.service';

describe('NgJ2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgJ2Service = TestBed.get(NgJ2Service);
    expect(service).toBeTruthy();
  });
});
