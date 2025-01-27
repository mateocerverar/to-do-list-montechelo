import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { ListTasksComponent } from './list-tasks/list-tasks.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TooltipModule } from 'primeng/tooltip';
import { SpeedDialModule } from 'primeng/speeddial';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    ListTasksComponent,
    TaskDetailComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    DataViewModule,
    ButtonModule,
    FieldsetModule,
    ToggleButtonModule,
    TooltipModule,
    SpeedDialModule,
    CardModule
  ]
})
export class TasksModule { }
