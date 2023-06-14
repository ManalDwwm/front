import { TestBed } from '@angular/core/testing';

import { DonateurGuard } from './donateur.guard';

describe('DonateurGuard', () => {
  let guard: DonateurGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DonateurGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
