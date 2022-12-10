import {animate, animation, style} from "@angular/animations";

export const destroyComponentAnimation = animation([
  animate('0.3s',
    style({
      transform: 'translateX(100%)'
    }))
]);
