import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.module';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-input-username',
  templateUrl: './input-username.component.html',
  styleUrls: ['./input-username.component.scss']
})
export class InputUsernameComponent {

  constructor(private readonly loginService: LoginService) { }

  public userSubmit(userInput: NgForm): void {
    //username
    const { username } = userInput.value; 

    this.loginService.login(username)
    .subscribe({
      next: (user: User) => {

      },
      error: () => {

      }
    })
  }

}
