import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiUrl = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]>{
    return this.http.get<Post[]>(this.apiUrl)
  }

  getPostById(id: number): Observable<Post>{
    return this.http.get<Post>(this.apiUrl+"/"+id)
  }

  addPost(postData: Post): Observable<Post>{
    return this.http.post<Post>(this.apiUrl, postData);
  }

  updatePost(postId: number, postData: Post): Observable<Post>{
    const url = `${this.apiUrl}/${postId}`
    return this.http.put<Post>(url, postData);
  }

  
}
