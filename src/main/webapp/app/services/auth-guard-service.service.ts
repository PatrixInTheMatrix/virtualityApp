import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  //  constructor() {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    /* check some condition
    if (someCondition)  {
      alert('You are not allowed to view this page');
      redirect to login/home page etc
      return false to cancel the navigation
      return false;
    }
    */

    console.warn(route, state);

    return true;
  }
}
