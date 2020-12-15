import { TestBed } from '@angular/core/testing';

import { DomiciliaryService } from './domiciliary.service';

describe('DomiciliaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DomiciliaryService = TestBed.get(DomiciliaryService);
    expect(service).toBeTruthy();
  });
});
