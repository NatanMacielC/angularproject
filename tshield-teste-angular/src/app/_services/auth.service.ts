import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoggedUser } from 'src/app/_models';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  currentUserSubject: BehaviorSubject<LoggedUser>;
  public currentUser: Observable<LoggedUser>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<LoggedUser>(
      JSON.parse(localStorage.getItem('currentUser') as string)
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  get currentUserValue(): LoggedUser {
    return this.currentUserSubject.value;
  }

  /** signin */
  signIn(login: string, password: string, client: string) {
    return this.http
      .post<any>(`${environment.API_URL}login`, {
        login,
        password,
        client,
      })
      .pipe(
        map((user) => {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.currentUserSubject.next(user);
          return user;
        })
      );
  }

  /** signout */
  signOut() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null as any);
  }
}
