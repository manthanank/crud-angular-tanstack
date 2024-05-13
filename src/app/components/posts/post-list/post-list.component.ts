import { Component, OnInit, inject } from '@angular/core';
import { injectQuery, injectQueryClient } from '@tanstack/angular-query-experimental';
import { PostService } from '../../../core/services/post.service';
import { Post } from '../../../core/models/post';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  postService = inject(PostService);
  router = inject(Router);
  queryClient = injectQueryClient();
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
