import { TestBed } from '@angular/core/testing';

import { DanhmucongthucService } from './danhmucongthuc.service';

describe('DanhmucongthucService', () => {
  let service: DanhmucongthucService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DanhmucongthucService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
