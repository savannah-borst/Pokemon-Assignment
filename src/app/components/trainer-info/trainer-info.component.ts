import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.module';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-trainer-info',
  templateUrl: './trainer-info.component.html',
  styleUrls: ['./trainer-info.component.scss']
})
export class TrainerInfoComponent implements OnInit {

  get user(): User | undefined {
    return this.userService.user;
  }

get pokemonUser(): string[] | undefined  {
  return this.userService.pokemonUser;
}

  constructor(
    private readonly userService: UserService
  ) { }


  ngOnInit(): void {
  }
}
