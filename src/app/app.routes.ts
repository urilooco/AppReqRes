import { Routes } from '@angular/router';
import { CreateUserComponent } from './components/createUser/create-user/create-user.component';
import { GetUserComponent } from './components/getUser/get-user/get-user.component';
import { SearchUserComponent } from './components/searchUser/search-user/search-user.component';

export const ROUTES: Routes = [
    {path: 'get-user', component: GetUserComponent},
    {path: 'create-user', component: CreateUserComponent},
    {path: 'search-user', component: SearchUserComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'get-user' }
]
