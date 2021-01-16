import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { routerTransition } from '@base/app-routing.animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [routerTransition],
})
export class AppComponent {
  backgroundImage = 'assets/images/blur.jpg';
  currentURL: boolean;

  constructor(private router: Router) {
    // Use this subscription to the router to check which is the current path for Hash Routing
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        // Set this boolean depending on the route to inject conditional styling in the template
        this.router.url === '/specs'
          ? (this.currentURL = true)
          : (this.currentURL = false);
      }
    });
  }

  getPageTransition(routerOutlet: RouterOutlet): any {
    // Return the router state to activate page transition animation
    return routerOutlet.isActivated ? routerOutlet.activatedRoute : '';
  }
}
