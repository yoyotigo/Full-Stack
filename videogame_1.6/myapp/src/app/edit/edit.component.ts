import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
  }

}
