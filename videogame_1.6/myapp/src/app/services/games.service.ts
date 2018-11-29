import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GamesService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getGames()
  {
    return this.http.get(`${this.uri}/games`);
  }
  getGamesById(id)
  {
    return this.http.get(`${this.uri}/games/${id}`);
  }
}