import { TestBed, async, inject } from '@angular/core/testing';

import { AuthDomiciliaryGuard } from './auth-domiciliary.guard';

describe('AuthDomiciliaryGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthDomiciliaryGuard]
    });
  });

  it('should ...', inject([AuthDomiciliaryGuard], (guard: AuthDomiciliaryGuard) => {
    expect(guard).toBeTruthy();
  }));
});
