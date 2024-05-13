import { Routes } from '@angular/router';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component';
import { UserAddComponent } from './components/users/user-add/user-add.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./components/users/users-list/users-list.component').then(
        (m) => m.UsersListComponent
      ),
  },
  {
    path: 'users/details/:id',
    loadComponent: () =>
      import('./components/users/user-details/user-details.component').then(
        (m) => m.UserDetailsComponent
      ),
  },
  {
    path: 'users/add',
    loadComponent: () =>
      import('./components/users/user-add/user-add.component').then(
        (m) => m.UserAddComponent
      ),
  },
  {
    path: 'users/edit/:id',
    loadComponent: () =>
      import('./components/users/user-edit/user-edit.component').then(
        (m) => m.UserEditComponent
      ),
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('./components/posts/post-list/post-list.component').then(
        (m) => m.PostListComponent
      ),
  },
  {
    path: 'posts/details/:id',
    loadComponent: () =>
      import('./components/posts/post-details/post-details.component').then(
        (m) => m.PostDetailsComponent
      ),
  },
  {
    path: 'posts/add',
    loadComponent: () =>
      import('./components/posts/post-add/post-add.component').then(
        (m) => m.PostAddComponent
      ),
  },
  {
    path: 'posts/edit/:id',
    loadComponent: () =>
      import('./components/posts/post-edit/post-edit.component').then(
        (m) => m.PostEditComponent
      ),
  },
  { path: '**', redirectTo: '' },
];
