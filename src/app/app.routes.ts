import { Routes } from '@angular/router';
import { LoginpageComponent } from './page/loginpage.component';
import { WelcomepageComponent } from './page/welcomepage.component';
import { SignupComponent } from './page/signup.component';
import { TaskcompleteComponent } from './todo/taskcomplete.component';
import { TaskfavoriteComponent } from './todo/taskfavorite.component';
import { TaskComponent } from './todo/task.component';

export const routes: Routes = [
    {path:'welcome',component:WelcomepageComponent},
    {path:'signup',component:SignupComponent},
     {path:'complete',component:TaskcompleteComponent},
     {path:'fav',component:TaskfavoriteComponent},
    {path:'',component:TaskComponent}
    
];
