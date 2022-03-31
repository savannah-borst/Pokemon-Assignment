import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-catch-button',
  templateUrl: './catch-button.component.html',
  styleUrls: ['./catch-button.component.scss']
})
export class CatchButtonComponent implements OnInit {

  @Input() pokemonName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  catchPokemon(): void {
    // add the pokemon to pokemon user
  }

}
