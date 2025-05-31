import { Injectable } from '@angular/core';
import { task } from '../app/models/task';

@Injectable({ providedIn: 'root' })
export class UtilsService {
  taskList: task[] = [];

  constructor() {
    let getArrFromStorage = localStorage.getItem('tasks');
    if (getArrFromStorage) {
      this.taskList = JSON.parse(getArrFromStorage);
    }
  }

  addTask(task: task) {
    this.taskList.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }

  removeTask(taskNumber: number) {
    this.taskList.splice(taskNumber, 1);
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
  }
}
