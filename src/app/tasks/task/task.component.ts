import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { DatePipe } from '@angular/common';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  constructor(private taskservice: TaskService) {}

  onCompleted() {
    this.taskservice.RemoveTask(this.task?.id);
  }
}
