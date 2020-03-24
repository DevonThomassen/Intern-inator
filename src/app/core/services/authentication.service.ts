import { Injectable } from '@angular/core';
import { ReplaySubject, BehaviorSubject, Observable } from 'rxjs';
import { User, ICredentials, IUser } from 'src/app/models';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUser: ReplaySubject<User> = new ReplaySubject(1);
  private currentToken: BehaviorSubject<string> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private router: Router) { }

  public getUser() {
    return this.currentUser;
  }

  public getToken() {
    return this.currentToken.getValue();
  }

  public isAuthenticated(): Observable<boolean> {
    return this.currentUser.pipe(
      map(user => {
        return !!user && !!this.getToken();
      })
    );

  }

  public login(credentials: ICredentials): Observable<User> {
    return this.http.post<IUser>('login', credentials)
  }

  public logout() {

  }
}
