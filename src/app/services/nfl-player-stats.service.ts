import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NflPlayerStatsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getNFLPlayerStats() {
    return this.httpClient.get("assets/rushing.json");
  }
}
