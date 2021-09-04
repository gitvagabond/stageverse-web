import { TestBed } from '@angular/core/testing';

import { GeoIPService } from './geoip.service';

describe('GeoipService', () => {
  let service: GeoIPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoIPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
