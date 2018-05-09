import { Component, InjectionToken, Inject } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

export const BACKEND_URL = new InjectionToken('BackendUrl');

@Component({
  selector: 'ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: BACKEND_URL,
      useValue: 'http://myQAserver.com'
    }
  ]
})
export class AppComponent {
  isNavigating = false;
  constructor(@Inject(BACKEND_URL) public url, private router: Router) {
    this.router.events.subscribe(
      (event) => {
        if (event instanceof NavigationStart) {
          this.isNavigating = true;
        }
        if (event instanceof NavigationEnd) {
          this.isNavigating = false;
        }
      }
    );
  }
}
