import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { NflPlayerStatsService } from './services/nfl-player-stats.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nflPlayerRushing: any = [];
  displayedColumns: string[] = [
    'Player', 
    'Team', 
    'Pos', 
    'Att', 
    'Att/G',
    'Yds',
    'Avg',
    'Yds/G',
    'TD',
    'Lng',
    '1st',
    '1st%',
    '20+',
    '40+',
    'FUM'
  ];

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private nflPlayerStatsService: NflPlayerStatsService
  ) {
    this.nflPlayerStatsService.getNFLPlayerStats().subscribe((results) => {
      this.nflPlayerRushing = results;
      console.log(this.nflPlayerRushing);
    });
  }
}
