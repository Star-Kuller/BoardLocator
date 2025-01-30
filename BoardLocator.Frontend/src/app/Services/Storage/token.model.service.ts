import { Injectable } from '@angular/core';

const TOKEN_KEY = "TOKEN";
@Injectable({
  providedIn: 'root'
})
export class TokenModel {
  public get token(): string | null { return localStorage.getItem(TOKEN_KEY)}
  public set token(token: string) { localStorage.setItem(TOKEN_KEY, token)}
}
