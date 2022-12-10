import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {SelectItem} from "./models/select-item";
import {Priority} from "./models/priority";

@Component({
  selector: 'app-select-list',
  templateUrl: './select-list.component.html',
  styleUrls: ['./select-list.component.scss'],
  animations: [
    trigger('create', [
      transition(':enter', [
        style({ height: 0 }),
        animate('0.3s ease-in', style({ height: '*' }))
      ]),
      transition(':leave', [
        animate('0.3s ease-out', style({ height: 0 }))
      ]),
    ])
  ]
})
export class SelectListComponent implements OnInit {
  @Input()
  options: SelectItem<Priority>[] = [];
  @Output()
  itemSelected = new EventEmitter<SelectItem<Priority> | null>();
  @Input()
  isShow = false;

  selectedItem: SelectItem<Priority>;

  constructor() { }

  ngOnInit(): void {
  }

  selected(item: SelectItem<Priority>): void {
    if (item.id == Priority.DEFAULT) {
      this.itemSelected.emit(null);

      return;
    }
    this.selectedItem = item;

    this.itemSelected.emit(item);
  }

}
