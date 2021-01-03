import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerTransition } from '@base/app-routing.animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [routerTransition]
})
export class AppComponent {
  backgroundImage = 'assets/images/blur.jpg';

  getPageTransition(routerOutlet: RouterOutlet): any {
    return routerOutlet.isActivated ? routerOutlet.activatedRoute : '';
  }
}
