export class NotifyMessage {
  constructor(private _id : number, private _text : string, private _type : NotifyMessageType) {}

  public get id() : number { return this._id; }
  public get text() : string { return this._text; }
  public get type() : NotifyMessageType { return this._type; }
}

export enum NotifyMessageType {
  error = 'error',
  warn = 'warn',
  info = 'info'
}
