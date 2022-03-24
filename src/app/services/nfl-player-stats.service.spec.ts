import { TestBed } from '@angular/core/testing';

import { NflPlayerStatsService } from './nfl-player-stats.service';

describe('NflPlayerStatsService', () => {
  let service: NflPlayerStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NflPlayerStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
