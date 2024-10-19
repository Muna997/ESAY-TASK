import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Users } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  @Input({ required: true }) users!: Users;
  @Input({ required: true }) selected!: boolean;
  @Output() selectedID = new EventEmitter();

  get imagePath() {
    return '../../assets/users/' + this.users.avatar;
  }

  onSelectUser() {
    this.selectedID.emit(this.users.id);
  }
}
