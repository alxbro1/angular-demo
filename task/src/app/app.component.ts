import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { Task } from './model/task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskListComponent, TaskFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [TaskService],
})
export class AppComponent implements OnInit {
  constructor(private taskService: TaskService) {}

  tasks!: Task[];

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  addTask(task: string) {
    const taskObj = {
      id: Math.floor(Math.random() * 1000),
      title: task,
      completed: false,
    };
    this.tasks = this.taskService.addTasks(taskObj);
  }

  deleteTask(id: number) {
    this.tasks = this.taskService.deleteTasks(id)
  }

  checkTask(id: number) {
    this.tasks = this.taskService.checkTask(id)
  }
}
