import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonList } from '../models/pokemon.module';
import { User } from '../models/user.module';
import { PokemonListService } from './pokemon-list.service';
import { UserService } from './user.service';

const { apiKey, apiUsers } = environment;

@Injectable({
  providedIn: 'root'
})
export class CatchPokemonService {

  constructor(
    private readonly http:  HttpClient,
    private readonly userService: UserService,
    private readonly PokemonListService: PokemonListService,
  ) { }

  //get pokemon based on pokemonname

  public addToCaught(pokemonName: string): Observable<User> {
    if (!this.userService.user) {
      throw new Error("addToCaught: There is no user");
    }

    const user: User = this.userService.user;
    const pokemon: PokemonList | undefined = this.PokemonListService.getPokemonByName(pokemonName)

    if (!pokemon) {
      throw new Error("addToCaught: No pokemon with name: " + pokemonName);
    }

    if (this.userService.caughtPokemon(pokemonName)) {
      this.userService.removeCaughtPokemon(pokemonName);
    } else {
      this.userService.addCaughtPokemon(pokemonName);
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': apiKey
    })

    return this.http.patch<User>(`${apiUsers}/${user.id}`, {
      pokemon: [...user.pokemon] //already updated
    }, {
      headers
    })
    .pipe(
      tap((updatedUser: User) => {
        this.userService.user = updatedUser;
      })
    )
  }
}
