import { TestBed } from '@angular/core/testing';

import { NgxDesignSystemShapaService } from './ngx-design-system-shapa.service';

describe('NgxDesignSystemShapaService', () => {
  let service: NgxDesignSystemShapaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDesignSystemShapaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
