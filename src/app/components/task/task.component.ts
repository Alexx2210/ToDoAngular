import { Component, Input, OnInit } from '@angular/core';
import { task } from '../../models/task';
import { UtilsService } from '../../../services/utils.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  @Input() taskNumber?: number;
  @Input() task?: task;

  constructor(public utilService: UtilsService) {}

  deleteTask(taskNumber?: number) {
    this.utilService.removeTask(taskNumber!);
  }
}
