import { trigger, transition, style, query, animate, group, state } from '@angular/animations';

export const crossFadeAnimation = trigger('crossFadeAnimation', [
  transition('* <=> *', [
    query(':enter, :leave', style({ position: 'absolute', width: '100%' })),
    query(':enter', style({ opacity: 0 })),
    group([
      query(':leave', animate('200ms ease-out', style({ opacity: 0 }))),
      query(':enter', animate('200ms ease-out', style({ opacity: 1 })))
    ])
  ])
]);

export const fadeInOutAnimation = trigger('fadeInOut', [
    state('void', style({
      opacity: 0
    })),
    transition('void <=> *', animate(2000))
  ]);