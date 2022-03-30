import { Component, OnInit } from '@angular/core';
//import { Pokemon } from 'src/app/models/pokemon.module';
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

  // get pokemon(): Pokemon[] {
  //   if (this.userService.user) {
  //     return this.userService.user.pokemon;
  //   }
  //   return [];
  // }

  constructor(
    private readonly userService: UserService
  ) { }


  ngOnInit(): void {
    const username = this.userService.user?.username;
    console.log(this.userService.user?.username);
  }
}
