import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${API_URL}/users`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${API_URL}/users/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(`${API_URL}/users`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${API_URL}/users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/users/${id}`);
  }
}
