import { Component, Input, OnInit } from '@angular/core';
import { PokemonList } from 'src/app/models/pokemon.module';
import { PokemonListService } from 'src/app/services/pokemon-list.service';

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
