import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayersService } from '../../services/players.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  player: any;
  angForm: FormGroup;
  title = 'Edit Player';
  constructor(private route: ActivatedRoute, private router: Router, private service: PlayersService, private fb: FormBuilder) {
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

  updatePlayer(playerName, rank, score, time, gamesPlayed,status) {
    this.route.params.subscribe(params => {
    this.service.updatePlayer(playerName, rank, score, time, gamesPlayed,status, params['id']);
    this.router.navigate(['index']);
  });
}


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.player = this.service.editPlayer(params['id']).subscribe(res => {
        this.player = res;
      });
    });
  }
}
