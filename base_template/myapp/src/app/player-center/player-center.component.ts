import { Component, OnInit } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-player-center',
  templateUrl: './player-center.component.html',
  styleUrls: ['./player-center.component.css'],
})
export class PlayerCenterComponent implements OnInit {


  players: Player[] =
  [
    {"_id": "1", "player": 'loco', "rank": 2, "score": 500, "time": "1d 25hrs", "gamesPlayed": "league", "status":"online"}
  ];
 
  constructor(){}

  ngOnInit() 
  {
  }
}
