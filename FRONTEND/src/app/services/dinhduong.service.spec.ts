import { TestBed } from '@angular/core/testing';

import { DinhduongService } from './dinhduong.service';

describe('DinhduongService', () => {
  let service: DinhduongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DinhduongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
