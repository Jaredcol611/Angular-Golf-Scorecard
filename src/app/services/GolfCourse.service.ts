import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { GolfCourse } from '../GolfCourse';
import { HttpClient } from '@angular/common/http';

// don't forget HttpClient

@Injectable()
export class GolfCourseService {

  url = 'https://golf-courses-api.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  getGolfCourses(latitude: number, longitude: number, radius: number): Observable<GolfCourse[]> {
    return this.httpClient.post<GolfCourse[]>(`${this.url}/courses`, {
      latitude: 40.396419,
      longitude: -111.9328359,
      radius: 10
    });
  }
}


