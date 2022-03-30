import { Component, OnInit } from '@angular/core';
import { PokemonList } from 'src/app/models/pokemon.module';
import { PokemonListService } from 'src/app/services/pokemon-list.service';


@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss']
})
export class CataloguePage implements OnInit {

  get loading(): boolean {
    return this.pokemonListService.loading;
  }

  get pokemonLists(): PokemonList[] {
    return this.pokemonListService.pokemonLists;
  }

  constructor(
    private readonly pokemonListService: PokemonListService
  ) { }

  ngOnInit(): void {
    this.pokemonListService.findAllPokemon()
  }

}
