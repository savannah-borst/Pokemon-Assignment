import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PokemonList } from '../models/pokemon.module';
import { Trainer } from '../models/trainer.module';
import { PokemonListService } from './pokemon-list.service';
import { TrainerService } from './trainer.service';

const { apiKey, apiUsers } = environment;

@Injectable({
  providedIn: 'root'
})
export class CatchPokemonService {

  constructor(
    private readonly http:  HttpClient,
    private readonly trainerService: TrainerService,
    private readonly PokemonListService: PokemonListService,
    private readonly router: Router
  ) { }

  //get pokemon based on pokemonname

  public addToCaught(pokemonName: string): Observable<Trainer> {
    if (!this.trainerService.trainer) {
      throw new Error("addToCaught: There is no user");
    }

    const trainer: Trainer = this.trainerService.trainer;
    const pokemon: PokemonList | undefined = this.PokemonListService.getPokemonByName(pokemonName)

    if (!pokemon) {
      throw new Error("addToCaught: No pokemon with name: " + pokemonName);
    }

    if (this.trainerService.caughtPokemon(pokemonName)) {
      this.trainerService.removeCaughtPokemon(pokemonName);
    } else {
      this.trainerService.addCaughtPokemon(pokemonName);
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'x-api-key': apiKey
    })

    return this.http.patch<Trainer>(`${apiUsers}/${trainer.id}`, {
      pokemon: [...trainer.pokemon] //already updated
    }, {
      headers
    })
    .pipe(
      tap((updatedTrainer: Trainer) => {
        this.trainerService.trainer = updatedTrainer;
      })
    )
  }
}
