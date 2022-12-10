import { Pipe, PipeTransform } from '@angular/core';
import {Priority, PriorityNameForUserView} from "../../../core/select-list/models/priority";

@Pipe({
  name: 'convertPriority'
})
export class ConvertPriorityPipe implements PipeTransform {

  transform(value: Priority): string {
    return PriorityNameForUserView[value];
  }

}
