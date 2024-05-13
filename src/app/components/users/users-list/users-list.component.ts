import { Component, OnInit, inject } from '@angular/core';
import { injectQuery, injectQueryClient } from '@tanstack/angular-query-experimental';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/user';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.scss',
})
export class UsersListComponent implements OnInit {
  userService = inject(UserService);
  users: User[] = [];
  router = inject(Router);
  unsubscribe$ = new Subject<void>();
  queryClient = injectQueryClient();
  constructor() {}

  ngOnInit(): void {}

  getQuery = injectQuery(() => ({
    queryKey: ['users'],
    queryFn: () =>
      this.userService
        .getUsers()
        .pipe(takeUntil(this.unsubscribe$))
        .subscribe((res) => {
          this.users = res;
        }),
  }));
  addUser() {
    this.router.navigate(['users/add']);
  }

  viewUser(id: number) {
    this.router.navigate(['/users/details', id]);
  }

  editUser(id: number) {
    this.router.navigate(['/users/edit', id]);
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
