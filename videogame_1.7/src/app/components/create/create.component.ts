import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../players.service'
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  title = 'Add Player';
  angForm: FormGroup;
  constructor(private playerservice: PlayersService, private fb: FormBuilder) {
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