import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from './new-task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();
  @Input({ required: true }) userid!: string;
  constructor(private taskservice: TaskService) {}

  enterTitle = '';
  enterSummary = '';
  enterDueDate = '';
  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.taskservice.AddTask(
      {
        title: this.enterTitle,
        summary: this.enterSummary,
        date: this.enterDueDate,
      },
      this.userid
    );
    this.close.emit();
  }
}
