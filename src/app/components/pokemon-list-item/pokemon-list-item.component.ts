import { Component, Input, OnInit } from '@angular/core';
import { PokemonList } from 'src/app/models/pokemon.module';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.scss']
})
export class PokemonListItemComponent implements OnInit {

  @Input() pokemonList?: PokemonList;

  constructor() { }

  ngOnInit(): void {
  }

}
