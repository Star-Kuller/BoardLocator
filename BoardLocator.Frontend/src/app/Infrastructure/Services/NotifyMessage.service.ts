import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {NotifyMessage, NotifyMessageType} from "../DTOs/NotifyMessage";
import {NotifyService} from "../Interfaces/NotifyService";

@Injectable()
export class ConcreteNotifyService extends NotifyService{
  public get messages$(): Observable<NotifyMessage[]> {
    return this._subject.asObservable();
  }

  private _subject = new BehaviorSubject<NotifyMessage[]>([]);
  private _counter = 0;

  public showError(message: string, milliseconds: number = 2500) {
    return this.show(message, milliseconds, NotifyMessageType.error)
  }

  public showWarn(message: string, milliseconds: number = 2500) {
    return this.show(message, milliseconds, NotifyMessageType.warn)
  }

  public showInfo(message: string, milliseconds: number = 3000) {
    return this.show(message, milliseconds, NotifyMessageType.info)
  }

  public removeMassage(id: number) {
    const currentErrors = this._subject.value;
    this._subject.next(currentErrors.filter((error) => error.id !== id));
  }

  private show(message: string, milliseconds: number, type: NotifyMessageType){
    let newMassage = new NotifyMessage(this._counter++, message, type);
    const current = this._subject.value;
    this._subject.next([...current, newMassage]);

    setTimeout(() => this.removeMassage(newMassage.id), milliseconds);
    return newMassage.id;
  }
}
