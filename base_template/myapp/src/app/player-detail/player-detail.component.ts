import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css'],
  inputs: ['players']   //inputs is players array from player-center.ts
})
export class PlayerDetailComponent implements OnInit {

  private editPlayer: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges()
  {
  }

  onPlayerClick()
  {
  }

}
