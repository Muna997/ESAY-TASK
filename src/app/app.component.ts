import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UsersComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;

  selectedUserID?: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserID);
  }
  onSelectUser(id: string) {
    this.selectedUserID = id;
  }
}
