import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  EmailList:any[]=[
    {email:"hello@gmail.com",password:12345},{}
  ]
  constructor(private router:Router){}
  authservice(data:any){
    console.log(data)
    return this.EmailList.find(x=>x.email==data.email&&x.password==data.password)
  }
  addUser(data:any){
   this.EmailList.push(data);
  }
}
