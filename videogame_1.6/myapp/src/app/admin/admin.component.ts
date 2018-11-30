import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { Player } from '../player.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  players: Player[];
  displayedColumns = ['playerName', 'rank', 'score', 'time', 'gamesPlayed', 'status','edit', 'delete'];
  playerName:String;
  rank:Number;
  score:Number;
  time:String;
  gamesPlayed:String;
  status:String;
 

  constructor(private playerService: PlayerService, private router: Router) { }

 fetchPlayers()
  {
    this.playerService.getPlayers()
    .subscribe((data: Player[]) =>
    {
      this.players = data;
      console.log('Data requested ...');
      console.log(this.players);
    });
  }

  editPlayer(id)
  {
    this.router.navigate([`/edit/${id}`]);
  }

  deletePlayer(id)
  {
    this.playerService.deletePlayer(id).subscribe(() =>
    {
      this.fetchPlayers();
    });
  }
  ngOnInit() {
    this.fetchPlayers();
  }

  onAddSubmit() {
    this.playerService.addPlayer(this.playerName,this.rank,this.score,
      this.time,this.gamesPlayed,this.status, "Join Game", "Edit", "Delete").subscribe(() =>
      {
        window.close();
        this.fetchPlayers();
        window.alert('Player has been Added')
        window.location.reload;
      });
  }
  onEditSubmit(){}

}