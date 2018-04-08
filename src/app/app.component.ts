import {Component, OnInit} from '@angular/core';
import {GolfCourseService} from './services/GolfCourse.service';
import {GolfCourse} from './Interface/GolfCourse';
import {CourseData} from './Interface/Course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Golf Scorecard';
  selected: number;
  nextSelect: any;
  golfCourse: GolfCourse[];
  currentCourse: GolfCourse;
  playerOne: string;
  playerTwo: string;
  playerThree: string;
  playerFour: string;
  numHoles: number;
  courseName: string;
  teeTypeIndex: number;
 // totalYards: any;
  players: string[] = [];
  //use this array to place the players on the scorecard, and then use a custom pipe to add a 2 to the end of a player if their names are the same.


  constructor(private golfCourseService: GolfCourseService) { }


  ngOnInit() {
    this.golfCourseService.getGolfCourses().subscribe((golfCourses: CourseData) => {
      this.golfCourse = golfCourses.courses;
    });
  }
   SingleCourse() {
    this.golfCourseService.getCourse(this.selected).subscribe((golfCourse: GolfCourse) => {
     this.currentCourse = golfCourse;
     console.log(golfCourse);

     this.courseName = golfCourse.name;
     this.numHoles = golfCourse.hole_count;
     console.log(this.numHoles);


    });
  }
  setTeeType() {
    this.nextSelect = this.currentCourse.tee_types[this.teeTypeIndex];
    console.log(this.nextSelect);
  }

  setPlayers(){
    this.players.push(this.playerOne, this.playerTwo, this.playerThree, this.playerFour);
    console.log(this.players)
  }
}




















