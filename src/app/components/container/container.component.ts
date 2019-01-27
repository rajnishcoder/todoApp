import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/TaskModel';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  allTasks: Array<TaskModel> = [];

  constructor() { }

  ngOnInit() {
    this.allTasks.push(new TaskModel());
    console.log(this.allTasks);

  }

}
