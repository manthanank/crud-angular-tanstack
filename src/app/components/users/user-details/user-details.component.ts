import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { UserService } from '../../../core/services/user.service';
import { Company, User, Address } from '../../../core/models/user';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [NgIf,RouterLink],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss',
})
export class UserDetailsComponent implements OnInit {
  userId: number = 0;
  route = inject(ActivatedRoute);
  userService = inject(UserService);
  user: User = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    website: '',
    username: '',
    address: {} as Address,
    company: {} as Company,
  };

  constructor() {
    this.userId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {}

  getDetailsQuery = injectQuery(() => ({
    queryKey: ['post', this.userId],
    queryFn: () => {
      return this.userService.getUser(this.userId).subscribe((res) => {
        this.user = res;
      });
    },
  }));
}
