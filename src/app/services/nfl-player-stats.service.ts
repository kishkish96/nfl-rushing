import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NflPlayerStatsService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getNFLPlayerStats(): Observable<any> {
    return this.httpClient.get("assets/rushing.json");
  }
}
