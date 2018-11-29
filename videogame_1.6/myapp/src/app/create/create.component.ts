import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

}
