import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectListComponent } from './select-list/select-list.component';
import { CheckElemCoordsDirective } from './check-elem-coords/check-elem-coords.directive';
import { CloseOnDirective } from './close-on/close-on.directive';
import { ScrollToDirective } from './scroll-to/scroll-to.directive';
import { PopupInfoComponent } from './popup-info/popup-info.component';



@NgModule({
  declarations: [
    SelectListComponent,
    CheckElemCoordsDirective,
    CloseOnDirective,
    ScrollToDirective,
    PopupInfoComponent,
  ],
  exports: [
    SelectListComponent,
    CheckElemCoordsDirective,
    CloseOnDirective,
    ScrollToDirective,
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
