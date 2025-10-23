import { TestBed } from '@angular/core/testing';

import { ShipapiService } from './shipapi.service';

describe('ShipapiService', () => {
  let service: ShipapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShipapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
