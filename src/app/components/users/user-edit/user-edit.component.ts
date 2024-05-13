import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { injectQuery, injectQueryClient } from '@tanstack/angular-query-experimental';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss',
})
export class UserEditComponent implements OnInit {
  userId: number = 0;
  route = inject(ActivatedRoute);
  router = inject(Router);
  userService = inject(UserService);
  queryClient = injectQueryClient();
  userForm = new FormGroup({
    id: new FormControl(0),
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    website: new FormControl(''),
    username: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      suite: new FormControl(''),
      city: new FormControl(''),
      zipcode: new FormControl(''),
      geo: new FormGroup({
        lat: new FormControl(''),
        lng: new FormControl(''),
      }),
    }),
    company: new FormGroup({
      name: new FormControl(''),
      catchPhrase: new FormControl(''),
      bs: new FormControl(''),
    }),
  });
  constructor() {
    this.userId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {}

  getDetailsQuery = injectQuery(() => ({
    queryKey: ['user', this.userId],
    queryFn: () => {
      return this.userService.getUser(this.userId).subscribe((res: User) => {
        // console.log(res);
        this.userForm.patchValue(res);
      });
    },
  }));

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
    const formValue = this.userForm.value as User;
    this.userService.updateUser(formValue).subscribe((res) => {
      // console.log(res);
      this.router.navigate(['/users']);
    });
  }
}
