import { Component, OnInit } from '@angular/core';
import { NflPlayerStatsService } from 'src/app/services/nfl-player-stats.service';

@Component({
  selector: 'app-nfl-rushing-stats',
  templateUrl: './nfl-rushing-stats.component.html',
  styleUrls: ['./nfl-rushing-stats.component.scss']
})
export class NflRushingStatsComponent implements OnInit {

  constructor(
    private nflPlayerStatsService: NflPlayerStatsService
  ) { }

  ngOnInit(): void {
  }

}
