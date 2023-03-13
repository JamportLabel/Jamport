import { trigger, transition, style, query, animate, group, state } from '@angular/animations';

export const crossFadeAnimation = trigger('crossFadeAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'absolute', width: '100%' }), { optional: true }),
    query(':enter', style({ opacity: 0 }), { optional: true }),
    group([
      query(':leave', animate('200ms ease-out', style({ opacity: 0 })), { optional: true }),
      query(':enter', animate('200ms ease-out', style({ opacity: 1 })), { optional: true })
    ])
  ])
]);

export const fadeInOutAnimation = trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate(2000))
  ]);