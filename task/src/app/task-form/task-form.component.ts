import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
  imports: [ReactiveFormsModule],
})
export class TaskFormComponent {
  taskForm: FormGroup;

  @Output() taskEmiter = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]], // Validación: requerido y mínimo 3 caracteres
    });
  }

  onSubmit(): void {
    if (this.taskForm.valid) {
      this.taskEmiter.emit(this.taskForm.value.title);
      this.taskForm.reset();
    }
  }
}
