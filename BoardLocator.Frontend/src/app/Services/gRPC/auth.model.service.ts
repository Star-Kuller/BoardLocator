import { Injectable } from '@angular/core';
import {GrpcServiceBase} from "./grpc.service.base";
import {TokenModel} from "../Storage/token.model.service";
import {AuthClient, ServiceError} from "../../../generated/auth_pb_service";
import {LoginRequest, RegisterRequest, TokenResponse} from "../../../generated/auth_pb";
import {grpc} from "@improbable-eng/grpc-web";
import {NotifyManager} from "../../Infrastructure/Interfaces/notify-manager.interface";
import {RpcError} from "../../Infrastructure/Errors/rpc.error";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends GrpcServiceBase{
  private readonly _client : AuthClient;
  constructor(tokenManager: TokenModel, private _notifyManager : NotifyManager)
  {
    super(tokenManager);
    this._client = new AuthClient(this.host)
  }

  public login(login : string, password : string)
  {
    const req = new LoginRequest();
    req.setLogin(login);
    req.setPassword(password);

    this._client?.login(req, (err: ServiceError | null, response?: TokenResponse | null) => {
      if (err) {
        if(err.code == grpc.Code.NotFound){
          this._notifyManager.showInfo(err.message)
          return;
        }
        throw new RpcError(err.message, err.code, err.metadata)
      }
      let token = response?.getToken();
      if(token)
        this.tokenManager.token = token;
    });
  }

  public register(name : string, login : string, password : string)
  {
    const req = new RegisterRequest();
    req.setName(name);
    req.setLogin(login);
    req.setPassword(password);

    this._client?.register(req, (err: ServiceError | null, response?: TokenResponse | null) => {
      if (err) {
        if(err.code == grpc.Code.AlreadyExists){
          this._notifyManager.showWarn(err.message)
          return;
        }
        throw new RpcError(err.message, err.code, err.metadata)
      }
      let token = response?.getToken();
      if(token)
        this.tokenManager.token = token;
    });
  }
}
