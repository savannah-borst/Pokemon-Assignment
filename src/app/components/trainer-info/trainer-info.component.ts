import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.module';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-trainer-info',
  templateUrl: './trainer-info.component.html',
  styleUrls: ['./trainer-info.component.scss']
})
export class TrainerInfoComponent implements OnInit {

  get user(): User | undefined {
    return this.userService.user;
  }

  get caughtPokemon(): string[] {
    if (this.userService.user){
      return this.userService.user.pokemon
    }
    return [];
  }

  constructor(
    private readonly userService: UserService
  ) { }


  ngOnInit(): void {
  }
}
