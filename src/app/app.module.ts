import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  provideAngularQuery,
  QueryClient,
} from '@tanstack/angular-query-experimental';
import { HomeComponent } from './components/home/home.component';
import { PostAddComponent } from './components/posts/post-add/post-add.component';
import { PostEditComponent } from './components/posts/post-edit/post-edit.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { UserAddComponent } from './components/users/user-add/user-add.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostAddComponent,
    PostEditComponent,
    PostDetailsComponent,
    PostListComponent,
    UserListComponent,
    UserAddComponent,
    UserEditComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideAngularQuery(new QueryClient())],
  bootstrap: [AppComponent]
})
export class AppModule { }
