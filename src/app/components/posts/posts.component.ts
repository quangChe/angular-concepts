import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'http-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostsService) {
    /** Too heavy in constructor **/
    // http.get(this.api)
    //   .subscribe(response => {
    //     this.posts = response;
    //     console.log(this.posts);
    //   });
  }

  // Life Cycle Hook 1: Start of Lifecycle
  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response;
        console.log(this.posts);
      });
  }

  createPost(input: HTMLInputElement) {
    const newPost = { title: input.value };

    this.service.createPost(newPost)
      .subscribe(response => {
        newPost['id'] = response['id'];
        this.posts.splice(0, 0, newPost);
        // (starting position, how many, what is being shoved in between)
        console.log(this.posts);
      });

    input.value = '';
  }

  updatePost(post, button: HTMLInputElement) {
    button.innerHTML = 'Updating...';

    /** 1. Patch sends a new key-value to the post **/
    let updatedKeyValue = { isRead: true };
    this.service.updatePost(post.id, updatedKeyValue)
      .subscribe(response => {
        button.innerHTML = 'Read';
        console.log(response);
      });

    /** Normally we would get an updated list of all data back
    then set 'this.posts = response;' **/

    /** 2. Put sends the whole post object with new key-value **/
    // let updatedPost = post;
    // updatedPost.isRead = true;
    // this.service.updatePost(post.id, updatedPost)
    //   .subscribe(response => button.innerHTML = 'Read');
  }

  deletePost(post, button: HTMLInputElement) {
    button.innerHTML = 'Deleting...';

    this.service.deletePost(post.id)
      .subscribe(response => {
        let index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
        console.log(response);
      });
  }

}
