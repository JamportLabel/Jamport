import { animate, query, style, transition, trigger } from '@angular/animations';

export const crossFade = trigger('crossFade', [
    transition('* <=> *', [
        query(':leave',
            [
                animate('0.2s ease', style({ opacity: 0 }))
            ]
        ),
        query(':enter',
            [
                style({opacity: 0}),
                animate('0.2s ease', style({ opacity: 1 }))
            ]
        )
    ])
]);