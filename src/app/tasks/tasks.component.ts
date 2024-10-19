import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './new-task/new-task.model';
import { TaskService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) name?: string;
  @Input({ required: true }) userid!: string;
  isAddTask = false;
  constructor(private taskservice: TaskService) {}
  get selected() {
    return this.taskservice.getUserTask(this.userid);
  }

  // onCompleteTask(id: string) {
  //   return this.taskservice.RemoveTask(id);
  // }

  onStartAddTask() {
    this.isAddTask = true;
  }

  onCloseAddTask() {
    this.isAddTask = false;
  }
}
