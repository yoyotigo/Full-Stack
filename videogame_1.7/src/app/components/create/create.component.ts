import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../players.service'
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Player';
  angForm: FormGroup;
  constructor(private playerservice: PlayersService, private fb: FormBuilder, private router: Router ) {
    this.createForm();
   }
  createForm() {
    this.angForm = this.fb.group({
      playerName: ['', Validators.required ],
      rank: ['', Validators.required ],
      score: ['', Validators.required ],
      time: ['', Validators.required ],
      gamesPlayed: ['', Validators.required ],
      status: ['', Validators.required ]
   });
  }
  addPlayer(playerName, rank, score, time, gamesPlayed,status) {
    this.playerservice.addPlayer(playerName, rank, score, time, gamesPlayed,status,"Join Game");
      
  }
  ngOnInit() {
  }
}