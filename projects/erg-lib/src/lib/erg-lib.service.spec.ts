import { TestBed } from '@angular/core/testing';

import { ErgLibService } from './erg-lib.service';

describe('ErgLibService', () => {
  let service: ErgLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ErgLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
