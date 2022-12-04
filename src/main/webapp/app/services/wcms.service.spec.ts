import { TestBed } from '@angular/core/testing';

import { WcmsService } from './wcms.service';

describe('WcmsService', () => {
  let service: WcmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WcmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
