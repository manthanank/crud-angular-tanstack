import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { injectQueryClient, injectQuery } from '@tanstack/angular-query-experimental';
import { Post } from '../../../core/models/post';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent implements OnInit{
  posts: Post[] = [];
  postService = inject(PostService);
  queryClient = injectQueryClient();
  router = inject(Router);
  constructor() {}

  ngOnInit(): void {}

  getQuery = injectQuery(() => ({
    queryKey: ['posts'],
    queryFn: () =>
      this.postService.getPosts().subscribe((res) => {
        this.posts = res;
      }),
  }));

  addPost() {
    this.router.navigate(['posts/add']);
  }

  viewPost(id: number) {
    this.router.navigate(['/posts/details', id]);
  }

  editPost(id: number) {
    this.router.navigate(['/posts/edit', id]);
  }

  deletePost(id: number) {
    this.postService.deletePost(id).subscribe((data) => {
      console.log(data);
    });
  }
}
