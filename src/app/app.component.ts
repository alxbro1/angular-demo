import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mi-app';
  tasks: string[] = []

  addTask(task:string){
    this.tasks.push(task)
  }
}
