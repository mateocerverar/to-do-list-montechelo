import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';

const routes: Routes = [
  {
    path: '', component: ListTasksComponent
  },
  {
    path: ':id', component: TaskDetailComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
