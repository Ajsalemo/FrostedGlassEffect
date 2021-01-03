import {
    animate,
    AnimationMetadata, group,
    query as q, style,
    transition, trigger
} from '@angular/animations';

const query = (styleParameter: string, animateParameter: AnimationMetadata | AnimationMetadata[], optional = { optional: true }) =>
    q(styleParameter, animateParameter, optional);

const fade = [
    query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
    query(':enter', [style({ opacity: 0 })]),
    group([
        query(':leave', [animate('0.3s ease-out', style({ opacity: 0 }))]),
        query(':enter', [
            style({ opacity: 0 }),
            animate('0.3s ease-out', style({ opacity: 1 })),
        ]),
    ]),
];

export const routerTransition = trigger('routerTransition', [
    transition('* => *', fade),
]);

