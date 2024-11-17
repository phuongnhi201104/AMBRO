import { TestBed } from '@angular/core/testing';

import { CongthucService } from './congthuc.service';

describe('CongthucService', () => {
  let service: CongthucService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CongthucService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
