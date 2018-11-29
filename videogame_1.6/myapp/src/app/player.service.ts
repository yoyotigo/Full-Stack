import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getPlayers()
  {
    return this.http.get(`${this.uri}/players`);
  }

  getPlayerById(id)
  {
    return this.http.get(`${this.uri}/players/${id}`);
  }

  addPlayer(playerName, rank, score, time, gamesPlayed, status)
  {
    const player = 
    {
      playerName: playerName,
      rank: rank,
      score: score,
      time: time,
      gamesPlayed: gamesPlayed,
      status: status
    };
    return this.http.post(`${this.uri}/players/add`, player);
  }

  updatePlayer(id, playerName, rank, score, time, gamesPlayed, status)
  {
    const player = 
    {
      playerName: playerName,
      rank: rank,
      score: score,
      time: time,
      gamesPlayed: gamesPlayed,
      status: status
    };
    return this.http.post(`${this.uri}/players/update/${id}`, player);
  }

  deletePlayer(id)
  {
    return this.http.get(`${this.uri}/players/delete/${id}`);
  }

}
