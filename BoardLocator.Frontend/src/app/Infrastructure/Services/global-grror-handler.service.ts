import {ErrorHandler, Injectable, NgZone} from '@angular/core';
import {NotifyManager} from "../Interfaces/notify-manager.interface";
import {RpcError} from "../Errors/rpc.error";
import {grpc} from "@improbable-eng/grpc-web";
import Code = grpc.Code;

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private _notifyMassages: NotifyManager, private ngZone: NgZone) {}

  handleError(error: any) {
    this.ngZone.run(() => {
      if(error instanceof RpcError)
        this.handleRpcErrors(error);
      else
        this._notifyMassages.showError(error.message || 'Undefined error');
    })
    console.error('Error from global error handler', error);
  }

  private handleRpcErrors(error: RpcError){
    switch (error.code){
      case Code.FailedPrecondition:
      case Code.Unavailable:
      case Code.OutOfRange:
      case Code.NotFound:
      case Code.DataLoss:
      case Code.Aborted:
        this._notifyMassages.showError(error.message);
        break;
      case Code.ResourceExhausted:
      case Code.DeadlineExceeded:
      case Code.InvalidArgument:
      case Code.AlreadyExists:
        this._notifyMassages.showWarn(error.message)
        break;
      case Code.PermissionDenied:
        this._notifyMassages.showWarn('Нет доступа');
        break
      case Code.Unauthenticated:
        //TODO redirect to Login page
        break;
      case Code.Unimplemented:
        this._notifyMassages.showWarn('Эта функция на данный момент ещё не реализована');
        break;
      case Code.Canceled:
        this._notifyMassages.showError('Действие отменено');
        break;
      case Code.Internal:
        this._notifyMassages.showError('Упс... Ошибка на стороне сервера');
        break;
      case Code.Unknown:
        this._notifyMassages.showError('Нет соединения с сервером');
        break;
      case Code.OK:
        this._notifyMassages.showInfo(error.message)
        break;
      default:
        console.log(`Undefined rpc error: { code:${error.code} | massage: ${error.message} | headers: ${error.metadata.toHeaders()} }`)
        this._notifyMassages.showError('Неопознанная ошибка');
    }
  }
}
