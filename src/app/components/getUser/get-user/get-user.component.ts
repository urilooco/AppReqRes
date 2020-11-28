import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppReqResService } from 'src/app/services/app-req-res.service';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styles: [
  ]
})
export class GetUserComponent implements OnInit {

  usuarios: any = [];

  constructor( private reqRes: AppReqResService, private _router: Router ) {
    this.reqRes.getAllUsers().subscribe((data: any) =>{
      this.usuarios = data.data;
    })

    this.reqRes.getAllUsers2().subscribe((data : any) => {
      this.usuarios = this.usuarios.concat(data.data);
      console.log(this.usuarios);
    })
  }

  ngOnInit(): void {
  }

  navigate(id){
    this._router.navigate([`/card ${id}`]);
  }

}
