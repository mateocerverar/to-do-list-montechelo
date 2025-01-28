import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Task } from '../interfaces/tasks.interfaces';
import { urlAPI } from '../../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private httpClient: HttpClient = inject(HttpClient)

  CONTROLLER: string = 'tasks/'

  public getTasks(): Observable<Task[]>{
    return this.httpClient.get<Task[]>(`${urlAPI}${this.CONTROLLER}`)
  }

  public getTaskById(id: string): Observable<Task>{
    return this.httpClient.get<Task>(`${urlAPI}${this.CONTROLLER}${id}`)
  }

  public putTask(task: Task): Observable<number>{
    return this.httpClient.put<number>(`${urlAPI}${this.CONTROLLER}`, task)
  }

  public completeTask(task: Task): Observable<number>{
    return this.httpClient.put<number>(`${urlAPI}${this.CONTROLLER}${task.id}`, task)
  }

  public deleteTask(id: string): Observable<boolean>{
    return this.httpClient.delete<boolean>(`${urlAPI}${this.CONTROLLER}${id}`)
  }

  public postTask(task: Task): Observable<Task[]>{
    return this.httpClient.post<Task[]>(`${urlAPI}${this.CONTROLLER}`, task)
  }
}
