import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { injectQuery, injectQueryClient } from '@tanstack/angular-query-experimental';
import { Post } from '../../../core/models/post';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss'
})
export class PostDetailsComponent implements OnInit {
  id: number = 0;
  post: Post = {
    id: 0,
    title: '',
    body: '',
    userId: 0,
  };
  route = inject(ActivatedRoute);
  postService = inject(PostService);
  queryClient = injectQueryClient();

  constructor() {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {}

  getDetailsQuery = injectQuery(() => ({
    queryKey: ['post', this.id],
    queryFn: () => {
      return this.postService.getPost(this.id).subscribe((res) => {
        this.post = res;
      });
    },
  }));
}
