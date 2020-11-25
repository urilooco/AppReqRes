import { Component, OnInit } from '@angular/core';
import { AppReqResService } from 'src/app/services/app-req-res.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styles: [
  ]
})
export class GetUserComponent implements OnInit {

  usuarios: any = [];

  constructor( private reqRes: AppReqResService ) {
    this.reqRes.getUsers().subscribe((data: any) =>{
      this.usuarios = data;
    })
  }

  ngOnInit(): void {
  }

}
