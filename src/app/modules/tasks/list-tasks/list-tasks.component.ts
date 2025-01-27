import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { TasksService } from '../../../core/services/tasks.service';
import { Task } from '../../../core/interfaces/tasks.interfaces';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-list-tasks',
  templateUrl: './list-tasks.component.html',
  styleUrl: './list-tasks.component.scss'
})
export class ListTasksComponent implements OnInit {
  private tasksService: TasksService = inject(TasksService)
  private messageService: MessageService = inject(MessageService)

  tasks!: Task[];

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
}
