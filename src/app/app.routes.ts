import { Routes } from '@angular/router';
import { CreateUserComponent } from './components/createUser/create-user/create-user.component';
import { GetUserComponent } from './components/getUser/get-user/get-user.component';

export const ROUTES: Routes = [
    {path: 'get-user', component: GetUserComponent},
    {path: 'create-user', component: CreateUserComponent}
]
