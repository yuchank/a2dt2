import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(destination: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(destination.component);
    // A call to the actual login service would go here
    // For now we'll just randomly return true or false
    const loggedIn = Math.random() < 0.5;
    if (!loggedIn) {
      alert(`You're not logged in and will be redirected to Login page`);
      this.router.navigate(['/login']);
    }
    return loggedIn;
  }
}
