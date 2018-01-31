import {Component, OnInit} from '@angular/core';
import {GolfCourseService} from './services/GolfCourse.service';
import {GolfCourse} from './Interface/GolfCourse';
import {CourseMetaData} from './Interface/Course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Golf Scorecard';
  golfCourses: CourseMetaData;
  selected: number;
  golfCourse: GolfCourse[];
  currentCourse: GolfCourse;

  constructor(private golfCourseService: GolfCourseService) { }


  ngOnInit() {
    this.golfCourseService.getGolfCourses().subscribe((golfCourses: CourseMetaData) => {
      this.golfCourse = golfCourses.courses;
       console.log(golfCourses.courses);
    });
  }
   SingleCourse() {
    this.golfCourseService.getCourse(this.selected).subscribe((golfCourse: GolfCourse) => {
     this.currentCourse = golfCourse;
      console.log(golfCourse);

    });
  }
}




















