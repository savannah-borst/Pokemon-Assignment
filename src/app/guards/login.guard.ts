import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TrainerService } from '../services/trainer.service';

@Injectable({
  providedIn: 'root'
})



export class LoginGuard implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly trainerService: TrainerService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.trainerService.trainer && this.router.url === "/") {
      this.router.navigateByUrl("/catalogue");
      return false;
    } else {
      return true;
    }
    
  }
  
}
