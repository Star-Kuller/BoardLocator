// package: 
// file: auth.proto

import * as auth_pb from "./auth_pb";
import {grpc} from "@improbable-eng/grpc-web";

type Authlogin = {
  readonly methodName: string;
  readonly service: typeof Auth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.LoginRequest;
  readonly responseType: typeof auth_pb.TokenResponse;
};

type Authregister = {
  readonly methodName: string;
  readonly service: typeof Auth;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof auth_pb.RegisterRequest;
  readonly responseType: typeof auth_pb.TokenResponse;
};

export class Auth {
  static readonly serviceName: string;
  static readonly login: Authlogin;
  static readonly register: Authregister;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class AuthClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  login(
    requestMessage: auth_pb.LoginRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_pb.TokenResponse|null) => void
  ): UnaryResponse;
  login(
    requestMessage: auth_pb.LoginRequest,
    callback: (error: ServiceError|null, responseMessage: auth_pb.TokenResponse|null) => void
  ): UnaryResponse;
  register(
    requestMessage: auth_pb.RegisterRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: auth_pb.TokenResponse|null) => void
  ): UnaryResponse;
  register(
    requestMessage: auth_pb.RegisterRequest,
    callback: (error: ServiceError|null, responseMessage: auth_pb.TokenResponse|null) => void
  ): UnaryResponse;
}

