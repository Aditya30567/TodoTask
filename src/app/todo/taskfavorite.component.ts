import { Component } from '@angular/core';
import { CheckService } from '../check.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-taskfavorite',
  imports: [CommonModule],
  templateUrl: './taskfavorite.component.html',
  styleUrl: './taskfavorite.component.css'
})
export class TaskfavoriteComponent {
taskCompleted:any[]=[]
constructor(private service:CheckService){}
ngOnInit(): void {
  this.taskCompleted=this.service.allTask.filter(x=>x.isFavourite)
}
toggleFavourite(item: any) {
  this.service.togglechanges(item);
}
deleteTask(item:any){
  item.isCheckbox=true;
  this.service.removeTask(item)
  this.taskCompleted=this.service.allTask.filter(x=>x.isCheckbox)
  // this.taskCompleted=this.service.allTask.filter(x=>x.isCheckbox)
}
}
