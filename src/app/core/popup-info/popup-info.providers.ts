import {InjectionToken, Provider} from "@angular/core";
import {ConfigPopupService} from "./services/config-popup.service";

export const DATA = new InjectionToken('Получение данных для попапа');

export const POPUP_INFO_PROVIDERS: Provider[] = [
  {
    provide: DATA,
    useFactory: (configPopupService: ConfigPopupService) => {
      return configPopupService.getData();
    },
    deps: [ConfigPopupService],
  },
];
