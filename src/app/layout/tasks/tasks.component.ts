import { Component } from '@angular/core';
import { map, Observable, Subject, takeUntil } from 'rxjs';
import { TasksService } from 'src/app/shared/core/services/tasks.service';
import { Task } from 'src/app/shared/core/interfaces/tasks';
import { MatDialog } from '@angular/material/dialog';
import { AddEditTaskComponent } from 'src/app/shared/components/add-edit-task/add-edit-task.component';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  unSubscribe!: Subject<any>;

  tasks$!: Observable<Task[]>;
  todo$!: Observable<Task[]>;
  inProgress$!: Observable<Task[]>;
  done$!: Observable<Task[]>;

  constructor(private translate: TranslateService, private tasksService: TasksService,
    private dialog: MatDialog) {
    this.unSubscribe = new Subject();
  }

  ngOnInit(): void {
    this.loadTasks();
  }

  openAddTask() {
    const dialogRef = this.dialog.open(AddEditTaskComponent, {
      direction: this.translate.currentLang === 'en' ? 'ltr' : 'rtl'
    });
    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) this.loadTasks();
      }
    })
  }

  openEditTask(task: Task) {
    const dialogRef = this.dialog.open(AddEditTaskComponent, {
      data: task,
      direction: this.translate.currentLang === 'en' ? 'ltr' : 'rtl'
    })

    dialogRef.afterClosed().subscribe({
      next: (res) => {
        if (res) this.loadTasks();
      }
    })
  }

  loadTasks(): void {
    this.tasks$ = this.tasksService.getTasks();

    this.todo$ = this.tasks$.pipe(
      map(tasks => tasks.filter(task => task.status === 'todo')))

    this.inProgress$ = this.tasks$.pipe(
      map(tasks => tasks.filter(task => task.status === 'inProgress')))

    this.done$ = this.tasks$.pipe(
      map(tasks => tasks.filter(task => task.status === 'done')))

    this.getSearchTerm()
  }

  deleteTask(id: number) {
    Swal.fire({
      title: this.translate.instant('alert.areYouSureDeleteTask'),
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: this.translate.instant('alert.delete'),
      confirmButtonColor: 'var(--bs-danger)',
      denyButtonColor: 'var(--bs-primary)',
      denyButtonText: this.translate.instant('alert.cancel'),
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.tasksService.deleteTask(id).subscribe({
          next: () => {
            Swal.fire({
              icon: 'success',
              title: this.translate.instant('alert.deletedSuccessfully'),
              showConfirmButton: false,
              timer: 600
            })
            this.loadTasks();
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
    });
  }


  getSearchTerm() {
    this.tasksService.search.pipe(takeUntil(this.unSubscribe)).subscribe({
      next: (search) => {
        if (search != null) this.searchTasks(search);
      }
    })
  }

  searchTasks(searchTerm: string) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    this.todo$ = this.tasks$.pipe(
      map(tasks => tasks.filter(task =>
        task.status === 'todo' &&
        (task.name.toLowerCase().includes(lowerCaseSearchTerm) || task.description.toLowerCase().includes(lowerCaseSearchTerm))
      ))
    );

    this.inProgress$ = this.tasks$.pipe(
      map(tasks => tasks.filter(task =>
        task.status === 'inProgress' &&
        (task.name.toLowerCase().includes(lowerCaseSearchTerm) || task.description.toLowerCase().includes(lowerCaseSearchTerm))
      ))
    );

    this.done$ = this.tasks$.pipe(
      map(tasks => tasks.filter(task =>
        task.status === 'done' &&
        (task.name.toLowerCase().includes(lowerCaseSearchTerm) || task.description.toLowerCase().includes(lowerCaseSearchTerm))
      ))
    );
  }

  ngOnDestroy(): void {
    this.unSubscribe.next(null);
    this.unSubscribe.complete();
  }

}
