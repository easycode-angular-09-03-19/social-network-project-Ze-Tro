import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, from } from 'rxjs';

import { GlobalAuth } from '../../../global-auth.guard';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
 constructor(
   private globalAuth: GlobalAuth
 ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let loginState: boolean;
    this.globalAuth.isLogin().subscribe((tokenState: boolean) => {
      if (!tokenState) {
        return loginState = true;
      } else {
        return loginState = false;
      }
    })
    return loginState;
  }
}