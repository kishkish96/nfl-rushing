import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';
import { INflPlayerStats } from 'src/app/models/i-nfl-player-stats';
import { NflPlayerStatsService } from 'src/app/services/nfl-player-stats.service';

@Component({
  selector: 'app-nfl-player-stats',
  templateUrl: './nfl-player-stats.component.html',
  styleUrls: ['./nfl-player-stats.component.scss']
})
export class NflPlayerStatsComponent implements OnInit {
  dataSource: MatTableDataSource<INflPlayerStats>;
  displayedColumns: string[] = [
    'player', 
    'team', 
    'position', 
    'attempts', 
    'attemptsPerGame',
    'yards',
    'average',
    'yardsPerGame',
    'touchdowns',
    'longestGain',
    'firstDowns',
    'firstDownPercentage',
    'twentyYardRushes',
    'fourtyYardRushes',
    'fumbles'
  ];

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('paginator') paginator: MatPaginator;

  constructor(
    private nflPlayerStatsService: NflPlayerStatsService
  ) {}

  ngOnInit() {
    this.nflPlayerStatsService.getNFLPlayerStats().pipe(
      map((data: any[]) => {
        return data.map((stats) => {
          return {
            player: stats.Player,
            team: stats.Team,
            position: stats.Pos,
            attempts: stats.Att,
            attemptsPerGame: stats['Att/G'],
            yards: stats.Yds,
            average: stats.Avg,
            yardsPerGame: stats['Yds/G'],
            touchdowns: stats.TD,
            longestGain: stats.Lng,
            firstDowns: stats['1st'],
            firstDownPercentage: stats['1st%'],
            twentyYardRushes: stats['20+'],
            fourtyYardRushes: stats['40+'],
            fumbles: stats.FUM
          } as INflPlayerStats;
        }) as INflPlayerStats[];
      })
    ).subscribe((results) => {
      this.dataSource = new MatTableDataSource(results);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = function(data: INflPlayerStats, filter: string): boolean {
        return data.player.toLowerCase().includes(filter);
      };
    });
  }

  filterPlayers(event: any) {
    this.dataSource.filter = event.target.value;
  }
}
