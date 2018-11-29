import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { MatDividerModule } from '@angular/material/divider';
import { Player } from '../player.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  players: Player[];
  displayedColumns = ['playerName', 'rank', 'score', 'time', 'gamesPlayed', 'status','join'];

  constructor(private playerService: PlayerService, private router: Router) { }

  ngOnInit() 
  {
    this.fetchPlayers();
  }

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

}
