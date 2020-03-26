import { Injectable } from '@angular/core';
import { ReplaySubject, BehaviorSubject, Observable } from 'rxjs';
import { User, ICredentials, IUser } from 'src/app/models';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUser: ReplaySubject<User> = new ReplaySubject(1);
  private currentToken: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor(
    private http: HttpClient,
    private router: Router,
    private helper: JwtHelperService
  ) { }

  public getUser() {
    return this.currentUser;
  }

  public getToken() {
    return this.currentToken.getValue();
  }

  public isAuthenticated(): boolean {
    return !!this.getToken();
  }

  public login(credentials: ICredentials, r: boolean): Observable<{ token: string }> {
    return this.http.post('auth/login', credentials).pipe(
      tap((data: { token: string }) => {
        this.currentToken.next(data.token);
        this.currentUser.next(this.helper.decodeToken(this.currentToken.value));
        this.router.navigate(['']);
      })
    );
  }

  public logout() {
    this.currentUser.next(null);
    this.currentToken.next(null);
    this.router.navigate(['auth/login']);
  }
}
