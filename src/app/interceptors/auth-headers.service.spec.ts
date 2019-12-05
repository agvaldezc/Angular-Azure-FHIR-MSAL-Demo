import { TestBed } from '@angular/core/testing';

import { AuthHeadersService } from './auth-headers.service';

describe('AuthHeadersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthHeadersService = TestBed.get(AuthHeadersService);
    expect(service).toBeTruthy();
  });
});
