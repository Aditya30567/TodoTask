import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  imports:[RouterModule,FormsModule,CommonModule],
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
loginData={
  email:"",
  password:""
}

constructor(private service:LoginserviceService,private router:Router){}
login(){
  var res=this.service.authservice(this.loginData)
  
  if(res ===undefined){
    alert("Its incorrect credential")
  }else{
    this.router.navigate(['/welcome'])
  }
}

}
