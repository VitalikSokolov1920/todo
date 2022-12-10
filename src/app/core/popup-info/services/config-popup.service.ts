import {ComponentFactory, ComponentFactoryResolver, Inject, Injectable} from "@angular/core";
import {Data} from "../models/data";
import {BehaviorSubject} from "rxjs";
import {PopupInfoComponent} from "../popup-info.component";
import {DOCUMENT} from "@angular/common";

@Injectable()
export class ConfigPopupService {
  private data = new BehaviorSubject<Data | null>(null);

  constructor(
    private resolver: ComponentFactoryResolver,
    @Inject(DOCUMENT) private document: Document
  ) {}

  createPopup(data: Data): void {
    this.data.next(data);

    // const factory: ComponentFactory<PopupInfoComponent>  = this.resolver.resolveComponentFactory(PopupInfoComponent);

    const divElem = this.document.createElement('div');

    divElem.style.position = 'absolute';
    divElem.style.top = '0';
    divElem.style.left = '0';
    divElem.setAttribute('popup-place', '');

    this.document.body.prepend(divElem);
  }

  getData(): Data | null {
    return this.data.getValue();
  }
}
