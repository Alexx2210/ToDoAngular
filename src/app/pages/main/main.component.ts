import { Component, OnInit, Input } from '@angular/core';
import { MenuComponent } from '../../components/menu/menu.component';
import { TaskComponent } from '../../components/task/task.component';
import { AddTaskFormComponent } from '../../components/add-task-form/add-task-form.component';
import { CommonModule } from '@angular/common';
import { UtilsService } from '../../../services/utils.service';
import { task } from '../../models/task';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MenuComponent, TaskComponent, AddTaskFormComponent, CommonModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  @Input() newTask?: task;
  taskList?: task[];

  constructor(public utilService: UtilsService) {}

  ngOnInit() {
    this.taskList = this.utilService.taskList;
  }

  test(newTask: task) {
    // let parsedArr = localStorage.getItem('tasks');
    // if(parsedArr) {
    //   this.taskList
    // }
    console.log(newTask);
    console.log('list', this.utilService.taskList);
  }
}
