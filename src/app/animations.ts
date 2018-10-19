import { trigger, style, animate, transition } from '@angular/animations';

export const appear = [
  trigger('appear', [
    transition(':enter', [
      style({
        transform: 'translateY(-3%)',
        opacity: 0,
        position: 'static'
      }),
      animate(
        '0.5s ease-in-out',
        style({ transform: 'translateY(0%)', opacity: 1 })
      )
    ])
  ]),
];
