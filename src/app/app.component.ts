import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pokemon-assignment';

  constructor(
    private readonly userService: UserService,
    private readonly route: ActivatedRoute,
    //private readonly pokemonService: PokemonService
  ) {}

   ngOnInit(): void {
  //   if (this.userService.user) {
  //     //this.pokemonService.findAllPokemon;
  //   }
  }
}
