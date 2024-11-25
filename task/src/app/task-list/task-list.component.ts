import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../model/task.model';
import { CommonModule } from '@angular/common';
import { TaskCompletedDirective } from '../task-completed.directive';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskCompletedDirective],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss',
})
export class TaskListComponent {
  @Input() tasks: Task[] = []
  @Output() deleteEmmiter = new EventEmitter<number>()
  @Output() checkedEmiter = new EventEmitter<number>()

  deleteTask(id: number) {
    this.deleteEmmiter.emit(id)
  }

  trackByTaskId(index: number, task: Task): number {
    return task.id
  }

  checkedTask(id:number){
    this.checkedEmiter.emit(id)
  }
}
