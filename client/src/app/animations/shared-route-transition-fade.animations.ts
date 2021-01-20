import {
    animate,
    state,
    style,
    transition,
    trigger
} from '@angular/animations';

export const sharedRouteTransitionFade = [
  trigger('fadeInOut', [
    state(
      'void',
      style({
        opacity: 0,
      })
    ),
    transition('void <=> *', animate(1000)),
  ]),
];
