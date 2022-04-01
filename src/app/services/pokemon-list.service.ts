import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonList, Result } from '../models/pokemon.module';
import { StorageKeys } from '../enum/storage-keys.enum';

const { apiPokemonList, pokemonImage } = environment

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  private _pokemonList: PokemonList[] = JSON.parse(sessionStorage.getItem(StorageKeys.Pokemons) || "[]");
  private _loading: boolean = false;
  private _error: string = "";
  private _next: string = "";
  private _previous: string = "";
  
  get pokemonList(): PokemonList[] {
    return this._pokemonList
  }

  get loading(): boolean {
    return this._loading;
  }

  get error(): string {
    return this._error;
  }


  get next(): string {
    return this._next;
  }

  get previous(): string {
    return this._previous;
  }

  constructor(private readonly http: HttpClient) { }

  

  public findAllPokemon(): void {
    this._loading = true;
    this.http.get<Result>(apiPokemonList + "?limit=100")
    .pipe(
      finalize(() => {
        this._loading = false;
      })
    )
    .subscribe({
      next: (pokemon: Result) => {
        this._pokemonList = pokemon.results;

        this.setPokemonInfo();

        sessionStorage.setItem(StorageKeys.Pokemons, JSON.stringify(this._pokemonList));
        
      },
      error: (error: HttpErrorResponse) => {
        this._error = error.message;
      }
    })
  }

  public getPokemonByType(): void {

  }

  public getPokemonById(id: number): PokemonList | undefined {
    return this._pokemonList.find((pokemon: PokemonList) => pokemon.id === id)
  }

  public getPokemonByName(name: string): PokemonList | undefined {
    return this._pokemonList.find((pokemon: PokemonList) => pokemon.name === name)
  }

  public setPokemonInfo(): void{
    this._pokemonList.forEach((pokemon, index) => {
      const id = index + 1;
      pokemon.id = id;
      pokemon.img = pokemonImage + id + ".png"
    });
  }
}
