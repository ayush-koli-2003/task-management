import { Component, Input,Output, EventEmitter } from '@angular/core';
import { TaskInterface } from '../task-interface';

@Component({
  selector: 'app-task-update',
  standalone: false,
  
  templateUrl: './task-update.component.html',
  styleUrl: './task-update.component.css'
})
export class TaskUpdateComponent {
  @Input() taskObj:TaskInterface={id:0,name:'',status:"",priority:''}
  @Output() emitter = new EventEmitter();
  newStatus:string=''
  updateStatus(){
    this.emitter.emit({id:this.taskObj.id,status:this.newStatus})
  }
}
