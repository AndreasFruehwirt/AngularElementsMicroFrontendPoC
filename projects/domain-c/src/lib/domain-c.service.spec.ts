import { TestBed } from '@angular/core/testing';

import { DomainCService } from './domain-c.service';

describe('DomainCService', () => {
  let service: DomainCService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DomainCService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
