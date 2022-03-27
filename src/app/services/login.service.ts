import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, switchMap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.module';

const { apiUsers } = environment;
const { apiKey } = environment;

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  //dependency injection
  constructor(private readonly http: HttpClient) { }

  //login
  public login(username: string):Observable<User> {
    return this.checkUsername(username)
    .pipe(
      switchMap((user: User | undefined) => {
        if (user === undefined) {
          return this.createUser(username)
        }
        return of(user);
      })
    )
  }
  
  //check if user exists
  private checkUsername(username: string): Observable<User | undefined> {
    return this.http.get<User[]>(`${apiUsers}?username=${username}`)
    //RxJS Operators
    .pipe(
      map((response: User[]) => response.pop())
    )
  }
  
  // if user does not exist - Create user
  private createUser(username: string): Observable<User> {
    const user = {
      username,
      pokemon: []
    };

    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "x-api-key": apiKey
    })
    
    return this.http.post<User>(apiUsers, user, {
      headers
    })
  }

  // if user ||  created user -> store user
}
