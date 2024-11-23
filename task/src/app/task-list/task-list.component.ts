import { Component } from '@angular/core';
import { Task } from '../model/task.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  tasks: Task[] = [
    {
      id: Math.floor(Math.random() * 1000),
      title: 'comer',
      completed: false,
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: 'Dormir',
      completed: false,
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: 'Cenar',
      completed: false,
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: 'dawda',
      completed: false,
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: 'trabajar',
      completed: false,
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: 'estudiar',
      completed: false,
    },
    {
      id: Math.floor(Math.random() * 1000),
      title: 'boludear',
      completed: false,
    },
  ];

  deleteTask(id:number){
    this.tasks = this.tasks.filter((task: Task) => task.id !== id);
  }
}
