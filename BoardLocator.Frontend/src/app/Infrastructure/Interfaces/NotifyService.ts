import {Observable} from "rxjs";
import {NotifyMessage} from "../DTOs/NotifyMessage";

// Class for Dependency Inversion
export abstract class NotifyService {
  abstract get messages$() : Observable<NotifyMessage[]>
  abstract showError(message: string, milliseconds?: number) : number
  abstract showWarn(message: string, milliseconds?: number) : number
  abstract showInfo(message: string, milliseconds?: number) : number
  abstract removeMassage(id: number) : void
}
