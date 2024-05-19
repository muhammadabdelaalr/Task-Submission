import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../core/interfaces/tasks';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input() task!: Task;

  @Output() editTask = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<number>();

  userName: any;

  constructor() {
    this.getUserName();
  }

  onDelete(id: number) {
    this.deleteTask.emit(id);
  }

  onEdit(task: Task) {
    this.editTask.emit(task);
  }

  getUserName() {
    this.userName = sessionStorage.getItem('userName');
  }

}
