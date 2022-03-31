import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Trainer } from 'src/app/models/trainer.module';
import { CatchPokemonService } from 'src/app/services/catch-pokemon.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-catch-button',
  templateUrl: './catch-button.component.html',
  styleUrls: ['./catch-button.component.scss']
})
export class CatchButtonComponent implements OnInit {

  public loading: boolean = false;
  public caughtPokemon: boolean = false;
  public disabled: boolean = false;
  @Input() pokemonName: string = "";

  constructor(
    private readonly catchPokemonService: CatchPokemonService,
    private readonly trainerService: TrainerService,
  ) { }

  ngOnInit(): void {
    this.caughtPokemon = this.trainerService.caughtPokemon(this.pokemonName);
  }

  catchPokemon(): void {
    this.loading = true;
    // add the pokemon to pokemon user
    this.catchPokemonService.addToCaught(this.pokemonName)
    .subscribe({
      next: (response: Trainer) => {
        this.loading = false;
        this.caughtPokemon = this.trainerService.caughtPokemon(this.pokemonName);
      },
      error: (error: HttpErrorResponse) => {
        console.log("ERROR", error.message);
      }
    })
  }



}
