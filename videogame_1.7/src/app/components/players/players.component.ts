import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlayersService } from '../../players.service';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
title='Player View'
  players:any;
  constructor(private http: HttpClient, private service: PlayersService) { 
    
  }
  

  ngOnInit() {
    this.getPlayers();
    
  }

  getPlayers(){
    this.service.getPlayers().subscribe(res=>{
      this.players =res;
    })
  }
}

