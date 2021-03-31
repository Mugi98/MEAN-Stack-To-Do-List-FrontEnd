import { TestBed } from '@angular/core/testing';

import { EnrolldataService } from './enrolldata.service';

describe('EnrolldataService', () => {
  let service: EnrolldataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnrolldataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
