import { Component, OnInit } from '@angular/core';
import { PokemonList } from 'src/app/models/pokemon.module';
import { PokemonListService } from 'src/app/services/pokemon-list.service';
import { Trainer } from '../../models/trainer.module';
import { TrainerService } from '../../services/trainer.service';

@Component({
  selector: 'app-trainer-info',
  templateUrl: './trainer-info.component.html',
  styleUrls: ['./trainer-info.component.scss']
})
export class TrainerInfoComponent implements OnInit {

  //save pokemon
  public pokemonCaught: PokemonList[] = [];

  get trainer(): Trainer | undefined {
    return this.trainerService.trainer;
  }

  get caughtPokemon(): string[] {
    if (this.trainerService.trainer){
      return this.trainerService.trainer.pokemon
    }
    return [];
  }

  constructor(
    private readonly trainerService: TrainerService,
    private readonly pokemonListService: PokemonListService
  ) { }


  ngOnInit(): void {
    this.getcaughtPokemonbyName();
  }

  //function get by name
  public getcaughtPokemonbyName(): void{
    this.caughtPokemon.forEach(item => {
      
      const pokemon: PokemonList | undefined = this.pokemonListService.getPokemonByName(item)
      if (pokemon){
        this.pokemonCaught.push(pokemon)
      }
    })
  }


}
