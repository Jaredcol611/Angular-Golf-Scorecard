import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { CourseData } from '../Interface/Course';
import { GolfCourse } from '../Interface/GolfCourse';

import {map} from 'rxjs/operators';

@Injectable()
export class GolfCourseService {

  url = 'https://golf-courses-api.herokuapp.com';
  golfCourse: GolfCourse;


  constructor(private httpClient: HttpClient) { }

  getGolfCourses(): Observable<CourseData> {
    return this.httpClient.post<CourseData>(`${this.url}/courses`, {
      latitude: 40.396419,
      longitude: -111.9328359,
      radius: 100
    });
  }
  getCourse(courseId): Observable<GolfCourse> {
    console.log(courseId);
    return this.httpClient.get<any>(`${this.url}/courses/${courseId}`)
      .pipe(map(currentCourse => this.golfCourse = currentCourse.course));
  }
}

// forget using interfaces, just redo it all using Observable<any>


