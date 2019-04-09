import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalAuth {
  
  constructor() { }
  
  isLogin() {
    const loginState = localStorage.getItem('sn_app_token');

    return new Observable((observer) => {
      console.log("loginState ", loginState);
      return observer.next(loginState);
    })
  }
}