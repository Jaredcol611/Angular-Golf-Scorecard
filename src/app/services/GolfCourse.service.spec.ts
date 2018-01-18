import { TestBed, inject } from '@angular/core/testing';

import { GolfApiService } from './GolfCourse.service';

describe('GolfApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GolfApiService]
    });
  });

  it('should be created', inject([GolfApiService], (service: GolfApiService) => {
    expect(service).toBeTruthy();
  }));
});
