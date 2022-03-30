import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const { apiPokemon } = environment;
@Injectable({
  providedIn: 'root'
})
export class PokemonCatalogueService {

  constructor(private readonly http: HttpClient) { }

  getPokemon() {
    return this.http.get(`${apiPokemon}?limit=10`);
  }

  getMorePokemonData(name: string) {
    return this.http.get(`${apiPokemon}/${name}`);
  }
}
