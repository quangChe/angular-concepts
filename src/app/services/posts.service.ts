import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private api = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get(this.api);
  }

  createPost(newPost) {
    return this.http.post(this.api, JSON.stringify(newPost));
  }

  updatePost(id, updatedObj) {
    return this.http.patch(this.api + '/' + id, updatedObj);
    // return this.http.put(this.api + '/' + id, updatedObj)
  }

  deletePost(id) {
    return this.http.delete(this.api + '/' + id);
  }
}
