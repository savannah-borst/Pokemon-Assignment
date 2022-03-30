import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonList } from '../models/pokemon.module';

const { apiPokemonList } = environment

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  private _pokemonLists: PokemonList[] = [];
  private _loading: boolean = false;
  private _next: string = "";
  private _previous: string = "";
  
  get loading(): boolean {
    return this._loading;
  }

  get pokemonLists(): PokemonList[] {
    return this._pokemonLists
  }

  get next(): string {
    return this._next;
  }

  get previous(): string {
    return this._previous;
  }

  constructor(
    private readonly http: HttpClient
  ) { }

  public findAllPokemon(): void {
    this._loading = true;
    this.http.get<PokemonList[]>(apiPokemonList)
    .pipe(
      finalize(() => {
        this._loading = false;
      })
    )
    .subscribe({
      next: (pokemon: any) => {
        this._pokemonLists = pokemon.results;
      }
    })
    
  }
}
