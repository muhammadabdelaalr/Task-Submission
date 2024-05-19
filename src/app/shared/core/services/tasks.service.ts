import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, shareReplay } from 'rxjs';
import { Tasks, baseUrl, status } from './global.service';
import { HttpClient } from '@angular/common/http';
import { Task, Status } from '../interfaces/tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  search: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  tasks!: Observable<Task[]>;
  constructor(private http: HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this.tasks = this.http.get<Task[]>(baseUrl+Tasks.getTasks).pipe(shareReplay());
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(baseUrl+Tasks.postTask, task);
  }

  updateTask(id: number, task: Task): Observable<Task> {
    const url = `${baseUrl+Tasks.putTask}/${id}`;
    return this.http.put<Task>(url, task);
  }

  deleteTask(id: number): Observable<Task> {
    const url = `${baseUrl+Tasks.deleteTask}/${id}`;
    return this.http.delete<Task>(url);
  }

  getAllStatus(): Observable<Status[]> {
    return this.http.get<Status[]>(baseUrl+status.getStatus);
  }

}
