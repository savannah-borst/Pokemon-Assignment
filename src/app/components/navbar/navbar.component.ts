import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trainer } from 'src/app/models/trainer.module';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  get trainer(): Trainer | undefined {
    return this.trainerService.trainer;
  }

  constructor(
    private readonly trainerService: TrainerService,
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.trainerService.trainer = undefined;
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigateByUrl("/login")
  }

}
