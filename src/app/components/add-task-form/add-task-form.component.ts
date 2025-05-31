import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UtilsService } from '../../../services/utils.service';
import { task } from '../../models/task';

@Component({
  selector: 'app-add-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task-form.component.html',
  styleUrl: './add-task-form.component.scss',
})
export class AddTaskFormComponent {
  @Output() sendTask = new EventEmitter<task>();
  taskName: string = '';
  task: task = new task();

  constructor(private utilsService: UtilsService) {}

  submit() {
    this.task = {
      taskName: this.taskName,
      timeStamp: new Date(),
      category: '',
    };

    this.sendTask.emit(this.task);
    this.utilsService.addTask(this.task);
    this.taskName = '';
  }
}
