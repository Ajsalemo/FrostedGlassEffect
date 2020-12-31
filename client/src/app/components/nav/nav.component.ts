import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  carIcon: string = 'assets/images/bmw_icon.png';
  visibilityBoolean: boolean = false;
}
