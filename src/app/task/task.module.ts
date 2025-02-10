import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { FormControl,FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaskService } from './task.service';
import { TaskUpdateComponent } from './task-update/task-update.component';
import { TaskDemo } from './task-demo/task-demo.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskCreateComponent,
    TaskUpdateComponent,
    TaskDemo
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports:[TaskListComponent],
  providers:[TaskService]
})
export class TaskModule { }
