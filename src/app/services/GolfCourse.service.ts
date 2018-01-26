import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {CourseMetaData} from '../Interface/Course';
import {GolfCourse} from '../Interface/GolfCourse';



@Injectable()
export class GolfCourseService {

  url = 'https://golf-courses-api.herokuapp.com';

  constructor(private httpClient: HttpClient) { }

  getGolfCourses(): Observable<CourseMetaData> {
    return this.httpClient.post<CourseMetaData>(`${this.url}/courses`, {
      latitude: 40.396419,
      longitude: -111.9328359,
      radius: 100
    });
  }
  getCourse(courseId): Observable<GolfCourse> {
    console.log(courseId);
    return this.httpClient.get<GolfCourse>(`${this.url}/courses/${courseId}`);
  }
}


