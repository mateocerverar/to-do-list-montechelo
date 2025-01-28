import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TasksService } from '../../../core/services/tasks.service';
import { Task } from '../../../core/interfaces/tasks.interfaces';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.scss'
})
export class TaskDetailComponent implements OnInit {
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute)
  private router: Router = inject(Router)
  private tasksService: TasksService = inject(TasksService)
  private messageService: MessageService = inject(MessageService)

  protected id!: string;
  protected task!: Task;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (v => {
        try {
          this.getTaskById(v['id'])
        } catch (error) {
          this.router.navigate(['..'])
        }
      }),
      error: (e => {
        this.router.navigate(['..'])
      })
    })
  }

  getTaskById(id: string) {
    this.tasksService.getTaskById(id).subscribe({
      next: (v => {
        this.task = v
        this.messageService.add({ severity: 'success', detail: 'Correctly consulted task' })
      }),
      error: (e => {
        this.messageService.add({ severity: 'error', detail: 'Error consulting task' })
        console.error(e);
      })
    })
  }

  deleteTask(id: string) {
    this.tasksService.deleteTask(id).subscribe({
      next: (v => {
        if (v) {
          this.messageService.add({ severity: 'success', detail: 'Correctly deleted task' })
        } else this.messageService.add({ severity: 'error', detail: 'Error in delete of task' })
        this.router.navigate(['..'])
      }),
      error: (e => {
        this.messageService.add({ severity: 'error', detail: 'Error in delete of task' })
        console.error(e);
      })
    })
  }
}
