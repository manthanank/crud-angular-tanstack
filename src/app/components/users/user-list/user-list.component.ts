import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { injectQuery, injectQueryClient } from '@tanstack/angular-query-experimental';
import { Subject, takeUntil } from 'rxjs';
import { User } from '../../../core/models/user';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
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
