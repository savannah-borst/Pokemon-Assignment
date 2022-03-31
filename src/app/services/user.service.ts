import { Injectable } from '@angular/core';
import { StorageKeys } from '../enum/storage-keys.enum';
import { PokemonList } from '../models/pokemon.module';
import { User } from '../models/user.module';
import { StorageUtil } from '../utils/storage.util';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private _user: User | undefined;

  public get user(): User | undefined {
    return this._user;
  }

  public get pokemonUser(): string[] | undefined {
    return  this._user?.pokemon;
  }

  public set user(user: User | undefined) {
    StorageUtil.storageSave<User>(StorageKeys.User, user!);
    this._user = user;
  }

  constructor() { 
    this._user = StorageUtil.storageRead<User>(StorageKeys.User);
  }

  public caughtPokemon(name: string): boolean {
    if (this._user) {
      return Boolean(this._user.pokemon.find((pokemon: string) => pokemon === name))
    }
    return false;
  }

  public addCaughtPokemon(name: string): void {
    if (this._user) {
      this._user.pokemon.push(name);
    }
  }


  public removeCaughtPokemon(name: string): void {
    if (this._user) {
      this._user.pokemon = this._user.pokemon.filter((pokemon: string) => pokemon !== name)
    }
  }
  
}
