import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/TaskModel';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  allTasks: Array<TaskModel> = [];
  taskName: string;

  constructor() { }

  ngOnInit() {
  }

  addNewTask() {
    const newTask = new TaskModel();
    newTask.name = this.taskName;
    this.allTasks.push(newTask);
  }

}
