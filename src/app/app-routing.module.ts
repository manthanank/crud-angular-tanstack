import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostAddComponent } from './components/posts/post-add/post-add.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { PostEditComponent } from './components/posts/post-edit/post-edit.component';
import { UserAddComponent } from './components/users/user-add/user-add.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UserListComponent,
  },
  {
    path: 'users/details/:id',
    component: UserDetailsComponent,
  },
  {
    path: 'users/add',
    component: UserAddComponent,
  },
  {
    path: 'users/edit/:id',
    component: UserEditComponent,
  },
  {
    path: 'posts',
    component: PostListComponent,
  },
  {
    path: 'posts/details/:id',
    component: PostDetailsComponent,
  },
  {
    path: 'posts/add',
    component: PostAddComponent,
  },
  {
    path: 'posts/edit/:id',
    component: PostEditComponent,
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
