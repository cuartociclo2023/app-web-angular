import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-lista',
  templateUrl: './post-lista.component.html',
  styleUrl: './post-lista.component.css'
})
export class PostListaComponent implements OnInit {
  
  posts: Post[] = []

  constructor(private postService: PostService){
  }
  ngOnInit(): void {
    this.getPosts()
  }
  getPosts(){
    this.postService.getPosts().subscribe(
      (data) => {
        this.posts = data        
      }
    )
  }

}
