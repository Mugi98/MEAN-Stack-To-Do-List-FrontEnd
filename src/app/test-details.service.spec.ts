import { TestBed } from '@angular/core/testing';

import { TestDetailsService } from './test-details.service';

describe('TestDetailsService', () => {
  let service: TestDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
