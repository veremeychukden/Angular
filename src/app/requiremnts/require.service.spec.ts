import { TestBed } from '@angular/core/testing';

import { RequireService } from './requirement.service';

describe('RequireService', () => {
  let service: RequireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
