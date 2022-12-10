import {AfterContentInit, AfterViewInit, Directive, Input} from '@angular/core';

@Directive({
  selector: '[appScrollTo]'
})
export class ScrollToDirective implements AfterContentInit{

  @Input('appScrollTo')
  scrollTo: number[];

  constructor() {}

  // TODO: скролл вверх
  ngAfterContentInit(): void {

  }

}
