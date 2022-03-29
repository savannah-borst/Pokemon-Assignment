import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.module';
import { LoginService } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-input-username',
  templateUrl: './input-username.component.html',
  styleUrls: ['./input-username.component.scss']
})
export class InputUsernameComponent {

  @Output() login: EventEmitter<void> = new EventEmitter();

  constructor(
    private readonly loginService: LoginService,
    private readonly userService: UserService
    ) { }

  public userSubmit(userInput: NgForm): void {
    //username
    const { username } = userInput.value; 

    this.loginService.login(username)
    .subscribe({
      next: (user: User) => {
        this.userService.user = user;
        this.login.emit();
      },
      error: () => {

      }
    })
  }

}
