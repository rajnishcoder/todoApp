import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/TaskModel';
import { StorageUtil } from 'src/app/framework/StorageUtil';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  allTasks: Array<TaskModel> = [];
  taskName: string;
  localStorageList: TaskModel[] = StorageUtil.getTodoListFromoLocal();

  constructor() { }

  ngOnInit() {
    StorageUtil.getTodoListFromoLocal();
  }

  addNewTask() {
    const newTask = new TaskModel();
    newTask.name = this.taskName;
    this.allTasks.push(newTask);
  }

}
