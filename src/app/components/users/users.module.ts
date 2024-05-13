import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserEditComponent } from './user-edit/user-edit.component';

const routes: Routes = [
  {
    path: '',
    component: UserListComponent,
  },
  {
    path: 'details/:id',
    component: UserDetailsComponent,
  },
  {
    path: 'add',
    component: UserAddComponent,
  },
  {
    path: 'edit/:id',
    component: UserEditComponent,
  },
];

@NgModule({
  declarations: [UserListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class UsersModule {}
