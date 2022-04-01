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
  private _count: number = 0;
  
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

  get count(): number {
    return this._count;
  }

  constructor(private readonly http: HttpClient) { }

  

  public findAllPokemon(limit: number, offset: number): void {
    this._loading = true;
    this.http.get<Result>(`${apiPokemonList}/?${limit}&${offset}`)
    .pipe(
      finalize(() => {
        this._loading = false;
      })
    )
    .subscribe({
      next: (pokemon: Result) => {
        this._pokemonList = pokemon.results;
        this._count = pokemon.count;
        console.log(this._count);
        this._next = pokemon.next;
        this._previous = pokemon.previous;

        this.setPokemonInfo();

        sessionStorage.setItem(StorageKeys.Pokemons, JSON.stringify(this._pokemonList));
        
      },
      error: (error: HttpErrorResponse) => {
        this._error = error.message;
      }
    })
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
