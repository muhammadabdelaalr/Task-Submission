import { TasksService } from 'src/app/shared/core/services/tasks.service';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Status, Task } from '../../core/interfaces/tasks';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.scss']
})
export class AddEditTaskComponent {
  taskForm!: FormGroup;
  status$!: Observable<Status[]>;

  constructor(private fb: FormBuilder, private tasksService: TasksService,
    private translate: TranslateService, private dialogRef: MatDialogRef<AddEditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Task) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      img: ['./assets/images/avatar.jpg', Validators.required],
      status: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.taskForm.patchValue(this.data);
    this.getAllStatus();
  }

  getAllStatus() {
    this.status$ = this.tasksService.getAllStatus();
  }

  onSave() {
    if(!this.data) {
      this.newTask();
    } else {
      this.editTask();
    }
  }

  newTask() {
    this.tasksService.addTask(this.taskForm.value).subscribe({
      next: (res) => {
        this.dialogRef.close(true);
        Swal.fire({
          icon: 'success',
          title: this.translate.instant('alert.createdSuccessfully'),
          showConfirmButton: false,
          timer: 600
        })
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.message,
          showConfirmButton: true,
          confirmButtonText: this.translate.instant('alert.done'),
        })
      }
    });
  }

  editTask() {
    this.tasksService.updateTask(this.data.id, this.taskForm.value).subscribe({
      next: (res) => {
        this.dialogRef.close(true);
        Swal.fire({
          icon: 'success',
          title: this.translate.instant('alert.editedSuccessfully'),
          showConfirmButton: false,
          timer: 600
        })
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: err.message,
          showConfirmButton: true,
          confirmButtonText: this.translate.instant('alert.ok'),
        })
      }
    });
  }
}
