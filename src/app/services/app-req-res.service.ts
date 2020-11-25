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

  routeListUsers(){
    return this.getQuery(`?page=2`).pipe(map(data =>{
      return data;
    }));
  }

  getUsers(){
    return this.getQuery('?page=2').pipe(map(data => {
      return data['id'].items;
    }))
  }

}
