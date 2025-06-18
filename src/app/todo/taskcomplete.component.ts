import { Component, OnInit } from '@angular/core';
import { CheckService } from '../check.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-taskcomplete',
  imports: [CommonModule],
  templateUrl: './taskcomplete.component.html',
  styleUrl: './taskcomplete.component.css'
})
export class TaskcompleteComponent implements OnInit{
taskCompleted:any[]=[]
constructor(private service:CheckService){}
ngOnInit(): void {
  this.taskCompleted=this.service.allTask.filter(x=>x.isCheckbox)
}
deleteTask(item:any){
  this.service.removeTask(item)
  this.taskCompleted=this.service.allTask.filter(x=>x.isCheckbox)
  // this.taskCompleted=this.service.allTask.filter(x=>x.isCheckbox)
}
}
