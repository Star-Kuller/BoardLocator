import { Injectable } from '@angular/core';
import { grpc } from '@improbable-eng/grpc-web';
import {environment} from "../../../environments/environment";
import {TokenModel} from "../Storage/token.model.service";

@Injectable({
  providedIn: 'root',
})
export class GrpcServiceBase {

  protected readonly host : string = environment.host;

  constructor(protected readonly tokenManager: TokenModel) {}

  protected get defaultMetadata() : grpc.Metadata {
    let metadata = new grpc.Metadata;
    let token = this.tokenManager.token;
    if(token)
      metadata.headersMap["Authorization"] = [`Bearer ${token}`];
    return metadata;
  }
}
