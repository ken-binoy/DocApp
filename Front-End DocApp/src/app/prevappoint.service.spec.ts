import { TestBed } from '@angular/core/testing';

import { PrevappointService } from './prevappoint.service';

describe('PrevappointService', () => {
  let service: PrevappointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrevappointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
