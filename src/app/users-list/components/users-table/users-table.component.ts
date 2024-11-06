import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../model/user';
import { UsersService } from '../../services/users-service.service';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})
export class UsersTableComponent {

  users: User[] | undefined;

  columnsToDisplay = ['name', 'email', 'phone', 'edit', 'delete'];

  constructor(private readonly usersService: UsersService,
    private readonly dialog: MatDialog) {}

  ngOnInit() {
    this.users = this.usersService.getUsers();
  }

  deleteUser(id: string) {
    this.usersService.deleteUser(id)
  }

  updateUser(user: User) {
    this.dialog.open(UserFormComponent, {
      data: {
        user
      },
    });
  }

  addUser() {
    this.dialog.open(UserFormComponent);
  }
}
