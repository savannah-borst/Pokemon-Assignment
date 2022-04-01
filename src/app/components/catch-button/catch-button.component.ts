import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  @Input() pokemonName: string = "";

  reloadPage(): void {
    const routeUrl = this.router.url
    if (routeUrl === "/trainer") {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
      this.router.onSameUrlNavigation = 'reload'
      this.router.navigate(["/trainer"])
      console.log(this.router.url);
    }
  }

  constructor(
    private readonly catchPokemonService: CatchPokemonService,
    private readonly trainerService: TrainerService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.caughtPokemon = this.trainerService.caughtPokemon(this.pokemonName);
  }

  catchPokemon(): void {
    this.loading = true;

    if (this.caughtPokemon && !window.confirm("You have already caught " + this.pokemonName + " would you like to release it?")) {
      return;
    }

    // add the pokemon to pokemon user
    this.catchPokemonService.addToCaught(this.pokemonName)
    .subscribe({
      next: (response: Trainer) => {
        this.reloadPage();
        this.loading = false;
        this.caughtPokemon = this.trainerService.caughtPokemon(this.pokemonName);
      },
      error: (error: HttpErrorResponse) => {
        console.log("ERROR", error.message);
      }
    })
  }
}
