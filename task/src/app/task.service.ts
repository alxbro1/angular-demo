import { Injectable } from '@angular/core';
import { Task } from './model/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [];

  constructor() {}

  getTasks() {
    const localStorageData = this.getLocalStorage();
    localStorageData && (this.tasks = localStorageData)
    return this.tasks;
  }

  addTasks(task: Task) {
    this.tasks.push(task);
    this.setLocalStorage();
    return this.tasks;
  }

  deleteTasks(id: number) {
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks.splice(index, 1);
    this.setLocalStorage();
    return this.tasks
  }

  checkTask(id: number) {
    const index = this.tasks.findIndex((task) => task.id === id);
    console.log(index)
    console.log(this.tasks[index].completed);
    this.tasks[index].completed = !this.tasks[index].completed;
    console.log(this.tasks[index].completed);
    this.setLocalStorage();
    return this.tasks
  }

  getLocalStorage(): Task[] | [] {
    if (
      typeof localStorage != 'undefined' &&
      localStorage.getItem('tasks') !== null
    )
      return JSON.parse(localStorage.getItem('tasks') as string);
    else return []
  }

  setLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
