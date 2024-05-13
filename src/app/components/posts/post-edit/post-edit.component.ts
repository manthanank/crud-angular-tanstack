import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../../core/services/post.service';
import { injectQuery, injectQueryClient } from '@tanstack/angular-query-experimental';

@Component({
  selector: 'app-post-edit',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.scss',
})
export class PostEditComponent implements OnInit {
  queryClient = injectQueryClient();
  postForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    body: new FormControl(''),
    userId: new FormControl(''),
  });
  postId: number = 0;
  route = inject(ActivatedRoute);
  router = inject(Router);
  postService = inject(PostService);

  constructor() {
    this.postId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {}

  getDetailsQuery = injectQuery(() => ({
    queryKey: ['post', this.postId],
    queryFn: () => {
      return this.postService.getPost(this.postId).subscribe((res) => {
        this.postForm.setValue(res);
      });
    },
  }));

  onSubmit() {
    this.postService.updatePost(this.postForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/posts']);
    });
  }
}
