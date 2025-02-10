import { Component, OnChanges, OnInit } from '@angular/core';
import { TaskInterface } from '../task-interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit {
  
  taskList:Array<TaskInterface>=[];
  Dtype = typeof this.taskList[0]
  isVisible:boolean=true;
  triggeredId:number=-1;
  // isUpdateVisible:Map<TaskInterface,boolean>;
  isUpdateVisible:boolean=false;
  constructor(private taskService:TaskService){
    // this.isUpdateVisible=new Map();
  }

  ngOnInit(): void {
    this.taskService.currentTaskList.subscribe((newlist)=>
      this.taskList = newlist
    )
    // for(let i=0;i<this.taskList.length;i++){
    //   this.isUpdateVisible.set(this.taskList[i],false)
    // }
  }

  createTrigger(){
    this.isVisible=!this.isVisible;
  }

  updateTrigger(id:number){
    this.triggeredId=id;
  }

  updateStatus(obj:{id:number,status:string}){
    this.taskService.updateStatus(obj.id,obj.status)
    this.updateTrigger(-3)
  }
}
