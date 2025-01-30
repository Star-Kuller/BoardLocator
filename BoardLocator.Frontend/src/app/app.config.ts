import {ApplicationConfig, ErrorHandler} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {NotifyManager} from "./Infrastructure/Interfaces/notifyManager.interface";
import {ConcreteNotifyManager} from "./Infrastructure/Services/concreteNotifyManager.service";
import {GlobalErrorHandler} from "./Infrastructure/Services/GlobalErrorHandler.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: NotifyManager, useClass: ConcreteNotifyManager },
    { provide: ErrorHandler, useClass: GlobalErrorHandler }]
};
