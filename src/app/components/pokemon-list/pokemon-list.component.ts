import { Component, Input, OnInit } from '@angular/core';
import { PokemonList } from 'src/app/models/pokemon.module';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {

  @Input() pokemonLists: PokemonList[] = [];

  constructor(
    ) {}

  ngOnInit(): void {
  }
}
