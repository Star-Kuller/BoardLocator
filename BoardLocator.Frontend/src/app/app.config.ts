import {ApplicationConfig, ErrorHandler} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {NotifyService} from "./Infrastructure/Interfaces/NotifyService";
import {ConcreteNotifyService} from "./Infrastructure/Services/NotifyMessage.service";
import {GlobalErrorHandler} from "./Infrastructure/Services/GlobalErrorHandler.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: NotifyService, useClass: ConcreteNotifyService },
    { provide: ErrorHandler, useClass: GlobalErrorHandler }]
};
