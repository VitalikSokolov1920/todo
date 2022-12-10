import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appCloseOn]'
})
export class CloseOnDirective{

  @Output('appCloseOn')
  clicked = new EventEmitter<void>();

  constructor(private elem: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  onClick(target: any) {
    const clickedInside = this.elem.nativeElement.contains(target);

    if (!clickedInside) {
      this.clicked.emit();
    }
  }

}
