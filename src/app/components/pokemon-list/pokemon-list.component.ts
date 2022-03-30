import { Component, OnInit } from '@angular/core';
import { PokemonCatalogueService } from 'src/app/services/pokemon-catalogue.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss'],
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];
  constructor(private pokemonService: PokemonCatalogueService) {}

  ngOnInit(): void {
    this.pokemonService.getPokemon()
    .subscribe((reponse: any) => {
      reponse.results.forEach((result: { name: string; }) => {
        this.pokemonService.getMorePokemonData(result.name)
        .subscribe((uniqueResponse: any) => {
          this.pokemons.push(uniqueResponse);
          console.log(this.pokemons);
      });
        
      });
    });
  }
}
