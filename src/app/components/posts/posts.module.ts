import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';
import { PostAddComponent } from './post-add/post-add.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostEditComponent } from './post-edit/post-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
  },
  {
    path: 'details/:id',
    component: PostDetailsComponent,
  },
  {
    path: 'add',
    component: PostAddComponent,
  },
  {
    path: 'edit/:id',
    component: PostEditComponent,
  },
];

@NgModule({
  declarations: [PostListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class PostsModule { }