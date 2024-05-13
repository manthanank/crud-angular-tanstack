import { Component, OnInit, inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../core/models/user';
import { UserService } from '../../../core/services/user.service';
import { injectQueryClient } from '@tanstack/angular-query-experimental';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrl: './user-add.component.scss',
})
export class UserAddComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
    const formValue = this.userForm.value as User;
    this.userService.createUser(formValue).subscribe((res) => {
      // console.log(res);
      this.router.navigate(['/users']);
    });
  }
}
