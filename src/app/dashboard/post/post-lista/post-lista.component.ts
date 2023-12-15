import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-lista',
  templateUrl: './post-lista.component.html',
  styleUrl: './post-lista.component.css'
})
export class PostListaComponent implements OnInit {
  
  posts: Post[] = []
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];

  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private router: Router){
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

  onNavigatePostDetail(id: string): void {
    this.router.navigate([id], {relativeTo: this.route})
  }

  onNavigateNewPostDetail(): void{
    this.router.navigate(['nuevo'], {relativeTo: this.route})
  }

}
