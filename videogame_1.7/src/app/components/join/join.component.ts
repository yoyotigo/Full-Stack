import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from '../../services/players.service';
import { GamesService } from '../../services/games.service';


@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  title='Join Game'
  players:any;
  angForm: FormGroup;
  constructor(private http: HttpClient,private route: ActivatedRoute, private router: Router, private service: GamesService, private fb: FormBuilder) { 
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      playerName: [''],
      rank: [''],
      score: [''],
      time: [''],
      gamesPlayed: [''],
      status: ['' ]
   });
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.players = this.service.joinGame(params['id']).subscribe(res => {
        this.players = res;
      });
    });
  }
}

