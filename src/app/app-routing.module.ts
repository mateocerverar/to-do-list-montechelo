import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tasks', loadChildren: () => import('./modules/tasks/tasks.module').then(m => m.TasksModule)
  },
  {
    path: '**', redirectTo: 'tasks', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
