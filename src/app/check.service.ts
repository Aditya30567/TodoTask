import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckService {
  taskDetail = {
    detail: "",
    isCheckbox: false,
    isFavourite: false,
  };
  allTask:any[]=[]
  constructor() { }
  newTask(inputTask:string){
    this.taskDetail.detail = inputTask;
    this.allTask.push({...this.taskDetail});
    console.log(this.allTask)
  }
  togglechanges(item:any){
    var res=this.allTask.find(x=>x.detail===item.detail)
    res.isCheckbox=item.isCheckbox;
    res.isFavourite=item.isFavourite
  }
  allData(){
    return this.allTask
  }
  removeTask(item:any){
    console.log(item)
    this.allTask=this.allTask.filter(x=>!x.isCheckbox)
    console.log(this.allTask)
  }
  // removeFav(item:any){
  //   this.allTask=this.allTask.filter(x=>!x.isFavourite)
  // }
} 
