import { TestBed, inject } from '@angular/core/testing';

import { GolfCourseService } from './GolfCourse.service';

describe('GolfApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GolfCourseService]
    });
  });

  it('should be created', inject([GolfCourseService], (service: GolfCourseService) => {
    expect(service).toBeTruthy();
  }));
});
