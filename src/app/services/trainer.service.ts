import { Injectable } from '@angular/core';
import { StorageKeys } from '../enum/storage-keys.enum';
import { PokemonList } from '../models/pokemon.module';
import { Trainer } from '../models/trainer.module';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  
  private _trainer: Trainer | undefined;

  public get trainer(): Trainer | undefined {
    return this._trainer;
  }

  public get pokemonTrainer(): string[] | undefined {
    return  this._trainer?.pokemon;
  }

  public set trainer(trainer: Trainer | undefined) {
    StorageUtil.storageSave<Trainer>(StorageKeys.Trainer, trainer!);
    this._trainer = trainer;
  }

  constructor() { 
    this._trainer = StorageUtil.storageRead<Trainer>(StorageKeys.Trainer);
  }

  public caughtPokemon(name: string): boolean {
    if (this._trainer) {
      return Boolean(this._trainer.pokemon.find((pokemon: string) => pokemon === name))
    }
    return false;
  }

  public addCaughtPokemon(name: string): void {
    if (this._trainer) {
      this._trainer.pokemon.push(name);
    }
  }


  public removeCaughtPokemon(name: string): void {
    if (this._trainer) {
      this._trainer.pokemon = this._trainer.pokemon.filter((pokemon: string) => pokemon !== name)
    }
  }
  
}
