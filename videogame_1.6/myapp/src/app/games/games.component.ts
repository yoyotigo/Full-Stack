import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../services/games.service';
import { Games } from './games';
import { MatTableDataSource } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  games: Games[];
  displayedColumns:["Title", "Platform", "Genre", "Rating", "Publisher", "Release", "Status"]

  constructor(private gamesservice: GamesService, private router: Router) { }

  ngOnInit() {
    this.fetchGames();
  }
  fetchGames()
  {
    this.gamesservice.getGames()
    .subscribe((data: Games[]) =>
    {
      this.games = data;
      console.log('Data requested ...');
      console.log(this.games);
    });
  }

}
