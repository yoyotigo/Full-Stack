import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from '../../services/players.service';


@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css']
})
export class JoinComponent implements OnInit {

  title='Join Game'
  player:any;
  angForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private service: PlayersService, private fb: FormBuilder) { 
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      playerName: [''],
      rank: [''],
      score: [''],
      time: [''],
      gamesPlayed: [''],
      status: ['']
   });
  }

  joinGame(playerName, rank, score, time, gamesPlayed,status) {
    status='In Game';
    this.route.params.subscribe(params => {
    this.service.joinGame(playerName, rank, score, time, gamesPlayed,status, params['id']);
    this.router.navigate(['players']);
  });
}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.player = this.service.playerGame(params['id']).subscribe(res => {
        this.player = res;
      });
    });
  }
}

