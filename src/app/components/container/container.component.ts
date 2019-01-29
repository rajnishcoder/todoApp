import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/TaskModel';
import { StorageUtil } from 'src/app/framework/StorageUtil';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  // i just don't like this "Array<TaskModel>" :)
  allTasks: TaskModel[] = StorageUtil.getTodoListFromoLocal() as unknown as TaskModel[] || [];
  taskName: string;

  constructor() { }

  ngOnInit() {
    StorageUtil.getTodoListFromoLocal();
  }

  addNewTask() {
    const newTask = new TaskModel();
    newTask.name = this.taskName;
    this.allTasks.push(newTask);
    this.clearTaskName();
  }

  clearTaskName() {
    this.taskName = '';
  }

}
