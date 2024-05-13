import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../../../core/services/post.service';

@Component({
  selector: 'app-post-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './post-add.component.html',
  styleUrl: './post-add.component.scss',
})
export class PostAddComponent implements OnInit {
  postForm: FormGroup = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });

  postService = inject(PostService);
  router = inject(Router);

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
