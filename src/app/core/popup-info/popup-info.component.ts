import {Component, Inject, OnInit} from '@angular/core';
import {DATA, POPUP_INFO_PROVIDERS} from "./popup-info.providers";
import {Data} from "./models/data";

@Component({
  selector: 'app-popup-info',
  templateUrl: './popup-info.component.html',
  styleUrls: ['./popup-info.component.scss'],
  providers: POPUP_INFO_PROVIDERS
})
export class PopupInfoComponent implements OnInit {

  constructor(@Inject(DATA) data: Data) {}

  ngOnInit(): void {
  }

}
