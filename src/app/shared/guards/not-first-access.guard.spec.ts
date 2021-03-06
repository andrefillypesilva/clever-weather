import { TestBed } from '@angular/core/testing';

import { NotFirstAccessGuard } from './not-first-access.guard';

describe('NotFirstAccessGuard', () => {
  let guard: NotFirstAccessGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotFirstAccessGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
