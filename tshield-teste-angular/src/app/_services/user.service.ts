﻿import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<User[]>(`${environment.API_URL}user`);
  }

  postUser(data: User) {
    return this.http.post<any>(`${environment.API_URL}user`, data, {
      headers: {},
    });
  }
}
