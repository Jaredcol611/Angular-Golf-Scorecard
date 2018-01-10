import { TestBed, inject } from '@angular/core/testing';

import { GolfApi.ServiceService } from './golf-api.service.service';

describe('GolfApi.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GolfApi.ServiceService]
    });
  });

  it('should be created', inject([GolfApi.ServiceService], (service: GolfApi.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
