import { Component, OnInit } from '@angular/core';
import { Trainer } from '../../models/trainer.module';
import { TrainerService } from '../../services/trainer.service';

@Component({
  selector: 'app-trainer-info',
  templateUrl: './trainer-info.component.html',
  styleUrls: ['./trainer-info.component.scss']
})
export class TrainerInfoComponent implements OnInit {

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
    private readonly trainerService: TrainerService
  ) { }


  ngOnInit(): void {
  }
}
