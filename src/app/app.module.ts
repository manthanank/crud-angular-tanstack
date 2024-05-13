import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  provideAngularQuery,
  QueryClient,
} from '@tanstack/angular-query-experimental';
import { PostAddComponent } from './components/posts/post-add/post-add.component';
import { PostEditComponent } from './components/posts/post-edit/post-edit.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { UserAddComponent } from './components/users/user-add/user-add.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { UserDetailsComponent } from './components/users/user-details/user-details.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PostAddComponent,
    PostEditComponent,
    PostDetailsComponent,
    UserAddComponent,
    UserEditComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [provideAngularQuery(new QueryClient())],
  bootstrap: [AppComponent]
})
export class AppModule { }
