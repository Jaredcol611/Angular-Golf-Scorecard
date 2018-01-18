import {Component, OnInit} from '@angular/core';
import {GolfCourseService} from './services/GolfCourse.service';
import {GolfCourse} from './GolfCourse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Golf Scorecard';
  golfCourses: GolfCourse[];

  constructor(private golfCourseService: GolfCourseService) { }

  ngOnInit() {
    this.golfCourseService.getGolfCourses(4, 5, 5).subscribe((golfCourses: GolfCourse[]) => {
      this.golfCourses = golfCourses;
      console.log(golfCourses);
    });
  }
}
