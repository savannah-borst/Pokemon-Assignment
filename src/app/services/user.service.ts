import { Injectable } from '@angular/core';
import { StorageKeys } from '../enum/storage-keys.enum';
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

  //get pokemon based on pokemonname

  //Path request with userid and pokemon name
  
}
