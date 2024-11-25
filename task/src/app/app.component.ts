import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { Task } from './model/task.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskListComponent, TaskFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  tasks!: Task[];

  addTask(task: string) {
    if (!this.tasks) this.tasks = [];
    this.tasks.push({
      id: Math.floor(Math.random() * 1000),
      title: task,
      completed: false,
    });
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task: Task) => task.id !== id);
  }

  checkTask(id: number) {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks[index].completed = !this.tasks[index].completed;
  }
}
