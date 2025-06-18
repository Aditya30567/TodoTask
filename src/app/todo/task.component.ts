import { CommonModule } from '@angular/common';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckService } from '../check.service';

@Component({
  selector: 'app-task',
  imports: [FormsModule, CommonModule],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent implements OnInit {
  inputTask: string = '';
  
  allTask: any[] = [];
   
  ngOnInit(): void {
    this.refreshfunction()
  }
  constructor(private service:CheckService){}
   refreshfunction(){
    this.allTask=this.service.allTask.filter(x=>!x.isCheckbox) 
    console.log("task data is",this.allTask)
   }
  addTask() {
    console.log(this.inputTask)
   this.service.newTask(this.inputTask);
    this.inputTask = '';
    // console.log(this.allTask.filter(x=>!x.isCheckbox));
    this.refreshfunction()
  }
  
  onCheckboxChange(item: any) {
    this.service.togglechanges(item);
    
    this.refreshfunction()
  }

  onFavouriteChange(item: any) {
    this.service.togglechanges(item);
  }
}
