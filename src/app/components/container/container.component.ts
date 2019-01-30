import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/TaskModel';
import { StorageUtils } from 'src/app/framework/StorageUtils';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  // i just don't like this "Array<TaskModel>" :)
  taskList: TaskModel[] = StorageUtils.getTodoListFromoLocal() as unknown as TaskModel[] || [];
  taskName: string;

  constructor() { }

  ngOnInit() {}

  addNewTask() {
    if (this.taskName && this.taskName.trim()) {
      const newTask = new TaskModel();
      newTask.name = this.taskName;
      this.taskList.push(newTask);
      StorageUtils.saveTodoListToLocal(this.taskList);
      this.clearTaskName();
    }
  }


  clearTaskName() {
    this.taskName = '';
  }

}
