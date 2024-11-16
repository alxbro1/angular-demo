import { Component, EventEmitter, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class addTaskComponent {
  @Output() taskAdded = new EventEmitter<string>()
  
  taskForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.taskForm = this.fb.group({
      task:['', [Validators.required, Validators.maxLength(40), Validators.minLength(3)]]
    })
  }
   
  onSubmit(){
    const newTask: string = this.taskForm.value.task;
    this.taskAdded.emit(newTask);
    this.taskForm.reset()
  }
}