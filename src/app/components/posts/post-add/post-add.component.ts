import { Component, OnInit, inject } from '@angular/core';
import { PostService } from '../../../core/services/post.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { injectQueryClient } from '@tanstack/angular-query-experimental';

@Component({
  selector: 'app-post-add',
  templateUrl: './post-add.component.html',
  styleUrl: './post-add.component.scss'
})
export class PostAddComponent implements OnInit {
  postForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  postService = inject(PostService);
  router = inject(Router);
  queryClient = injectQueryClient();

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.postForm.invalid) {
      return;
    }
    this.postService.createPost(this.postForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/posts']);
    });
  }
}
