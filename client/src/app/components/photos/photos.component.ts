import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { Component } from '@angular/core';
// This component can potentially be refactored into a reusable component with specs.component
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  animations: [
    trigger('fadeInOut', [
      state(
        'void',
        style({
          opacity: 0,
        })
      ),
      transition('void <=> *', animate(1000)),
    ]),
  ],
})
export class PhotosComponent {
  isError = false;
  isLoading = false;
}
