import { Component, Input, OnInit } from '@angular/core';
import { PokemonList } from 'src/app/models/pokemon.module';
import { PokemonListService } from 'src/app/services/pokemon-list.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {

  page = 1;
  totalPokemons: number = 0;

  @Input() pokemonLists: PokemonList[] = [];

  get pokemonList(): PokemonList[] {
    return this.pokemonListService.pokemonList;
  }

  get next(): string {
    return this.pokemonListService.next;
  }

  get previous(): string {
    return this.pokemonListService.previous;
  }

  get count(): number {
    return this.pokemonListService.count;
  }

  constructor(
    private readonly pokemonListService: PokemonListService
  ) { }

  ngOnInit(): void {
      this.pokemonListService.findAllPokemon(10, 20);
      this.countPokemon();
      
  }

  public countPokemon(): void {
    this.totalPokemons = this.pokemonListService.count();
  }
}


