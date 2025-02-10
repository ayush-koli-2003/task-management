import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TaskInterface } from '../task-interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-create',
  standalone: false,
  
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.css'
})
export class TaskCreateComponent {
  @Output() emitter = new EventEmitter()
  constructor(private taskService:TaskService){

  }
  createTaskGroup = new FormGroup({
    taskName: new FormControl(''),
    taskStatus: new FormControl(''),
    taskPriority: new FormControl('')
  })

  onSubmit(){
    // console.log(this.createTaskGroup.value);
    let task={name:this.createTaskGroup.value.taskName,status:this.createTaskGroup.value.taskStatus,priority:this.createTaskGroup.value.taskPriority}
    this.taskService.createTask(task);
    this.emitter.emit("Submitted")
  }
}
