import { Injectable } from '@angular/core';
import { TaskInterface } from './task-interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TaskService {
  static id:number=0;
  taskList:Array<TaskInterface>=[];
  private taskListSubject = new BehaviorSubject<Array<TaskInterface>>(this.taskList)
  currentTaskList = this.taskListSubject.asObservable();
  constructor() {
  }

  createTask(newTask:any){
    let task:TaskInterface = {id:++TaskService.id,  name:newTask.name, status: newTask.status, priority:newTask.priority}
    this.taskList.push(task)
    this.taskListSubject.next(this.taskList);
    // console.log(this.taskList[this.taskList.length -1 ]);
  }

  updateStatus(id:number,status:string){
    for(let i=0;i<this.taskList.length;i++){
      if(this.taskList[i].id===id){
        this.taskList[i].status=status;
      }
    }
    this.taskListSubject.next(this.taskList)
  }
}
