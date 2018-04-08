
import {MatTableDataSource} from '@angular/material';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-scorecard',
  templateUrl: './scorecard.component.html',
  styleUrls: []
})
export class ScorecardComponent implements OnInit {

  displayedColumns = ['player'];
  numOfHoles = 9;
  dataSource = new MatTableDataSource<any>(SCORECARD_DATA);

  constructor() {
    for(let i = 0; i < this.numOfHoles; i++) {
      let name = `${i + 1}`;
      this.displayedColumns.push(name)
    }
    this.displayedColumns.push('total');
  }

  ngOnInit() {

  }
}

  const SCORECARD_DATA: any[] = [
    {
      'player': 'John',
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0,
      '8': 0,
      '9': 0,
    }
  ];


