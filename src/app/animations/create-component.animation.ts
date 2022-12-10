import {animate, animation, style} from "@angular/animations";

export const createComponentAnimation = animation([
  style({ transform: 'translateX(-100%)' }),
  animate('0.5s')
]);
