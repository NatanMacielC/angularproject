import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UsersListComponent implements OnInit {
  title = 'Users List';
  usersList: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.userService.getAll().subscribe((result: any) => {
      this.usersList = result.data.filter(
        (value: { active: boolean }) => value.active
      );
    });
  }
}
