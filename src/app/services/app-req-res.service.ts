import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppReqResService {

  constructor(private http: HttpClient) { }

  getQuery(query: string){ 
    const url = `https://reqres.in/api/users${query}`;
    return this.http.get(url);
  }

  getUsers(id){
    return this.getQuery(`/${id}`);
  }

  searchUsers(id){
    return this.getQuery(`/${id}`);
  }

  getAllUsers(){
    return this.getQuery('');
  }

  getAllUsers2(){
    return this.getQuery('?page=2');
  }

  addUsers(data: any){
    return this.http.post('https://reqres.in/api/users', data);
  }

  deleteUser(id){
    return this.http.delete(`https://reqres.in/api/users/${id}`);
  }

}
