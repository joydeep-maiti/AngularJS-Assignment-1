import { TestBed } from '@angular/core/testing';

import { Log2Service } from './log2.service';

describe('Log2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Log2Service = TestBed.get(Log2Service);
    expect(service).toBeTruthy();
  });
});
