import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { TasksService } from '../../../core/services/tasks.service';
import { CreateTask, Task } from '../../../core/interfaces/tasks.interfaces';
import { MessageService } from 'primeng/api';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.scss'
})
export class ListTasksComponent implements OnInit {
  private tasksService: TasksService = inject(TasksService)
  private messageService: MessageService = inject(MessageService)

  tasks!: Task[];
  date = new Date()

  createTask = new FormGroup<CreateTask>({
    id: new FormControl<string | null>(null),
    title: new FormControl<string | null>(null, Validators.required),
    detail: new FormControl<string | null>(null, Validators.required),
    estimatedDate: new FormControl<Date | null>(null, Validators.required),
    completed: new FormControl<boolean>(false)
  })

  ngOnInit(): void {
    console.log("Hola");
    this.getTasks()
  }

  getTasks() {
    this.tasksService.getTasks().subscribe({
      next: (v => {
        this.messageService.add({ severity: 'success', detail: 'Correctly consulted tasks' })
        this.tasks = v
      }),
      error: (e => {
        this.messageService.add({ severity: 'error', detail: 'Error consulting tasks' })
        console.error(e);
      })
    })
  }

  cardDetail(taskid: number) {
    console.log('taskid: ', taskid);
  }

  changeTask(task: Task) {
    this.tasksService.completeTask(task).subscribe({
      next: (v => {
        this.messageService.add({ severity: 'success', detail: 'Correctly updated task' })
        this.getTasks()
      }),
      error: (e => {
        this.messageService.add({ severity: 'error', detail: 'Error updating task' })
      })
    })
  }

  saveTask(){
    let id = this.tasks.length + 1
    this.createTask.controls.id.setValue(id.toString())
    this.tasksService.postTask(this.createTask.value as Task).subscribe({
      next: (v => {
        this.messageService.add({ severity: 'success', detail: 'Correctly created task' })
        this.createTask.reset()
        this.getTasks()
      }),
      error: (e => {
        this.messageService.add({ severity: 'error', detail: 'Error creating task' })
      })
    })
  }
}
