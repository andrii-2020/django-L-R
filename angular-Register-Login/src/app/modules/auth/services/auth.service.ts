import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAuth, IToken} from '../interfaces';
import {Observable} from 'rxjs';

import {URL} from '../../../config/';
import {tap} from 'rxjs/operators';
import {IUser} from '../../main/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessTokenKey = 'access';
  private refreshTokenKey = 'refresh';
  constructor(private httpClient: HttpClient) { }

  login(user: IAuth): Observable<IToken>{
    return this.httpClient.post<IToken>(`${URL}/auth`, user)
    .pipe(
      tap((tokens: IToken) => this.setTokens(tokens))
    );
  }

  register(user: IAuth): Observable <void> {
    return this.httpClient.post<void>(`${URL}/auth/register`, user);
  }

  refreshToken(): Observable<IToken> {
    return this.httpClient.post<IToken>(`${URL}/auth/refresh`, {refresh: this.getRefreshToken()})
      .pipe(
        tap((tokens: IToken) => this.setTokens(tokens))
      );
  }

  public isAuthenticated(): boolean {
    return !!this.getAccessToken();
  }

  private setAccessToken(access: string): void {
    localStorage.setItem(this.accessTokenKey, access);
  }

  private setRefreshToken(refresh: string): void {
    localStorage.setItem(this.refreshTokenKey, refresh);
  }

  public getAccessToken(): string {
    return localStorage.getItem(this.accessTokenKey);
  }

  private getRefreshToken(): string {
    return localStorage.getItem(this.refreshTokenKey);
  }

  deleteTokens(): void {
    localStorage.removeItem(this.accessTokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }

  private setTokens(tokens: IToken): void {
    const {access, refresh} = tokens;
    this.setAccessToken(access);
    this.setRefreshToken(refresh);
  }
}
