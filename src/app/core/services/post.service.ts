import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post';
import { environment } from '../../../environments/environment';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${API_URL}/posts`);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(`${API_URL}/posts/${id}`);
  }

  createPost(user: Post): Observable<Post> {
    return this.http.post<Post>(`${API_URL}/posts`, user);
  }

  updatePost(user: Post): Observable<Post> {
    return this.http.put<Post>(`${API_URL}/posts/${user.id}`, user);
  }

  deletePost(id: number): Observable<any> {
    return this.http.delete(`${API_URL}/posts/${id}`);
  }
}