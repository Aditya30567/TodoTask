import { Component } from '@angular/core';
import { EmailValidator, FormsModule } from '@angular/forms';
import { LoginserviceService } from '../loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
signupData={
  email:"",
  password:""
}
constructor(private service:LoginserviceService,private router:Router){}
signup(){
  this.service.addUser(this.signupData);
  this.router.navigate([''])
}
}
