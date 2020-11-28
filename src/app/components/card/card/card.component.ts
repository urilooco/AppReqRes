import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppReqResService } from 'src/app/services/app-req-res.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  user: any = [];
  deleted: boolean = false;

  constructor( private _router: ActivatedRoute, private reqRes: AppReqResService ) { }

  ngOnInit(): void {
    this._router.params.subscribe( params => {
      this.reqRes.getUsers(params['id']).subscribe( (data: any) => {
        this.user = data.data;
      } );
    })
  }

  delete(){
    this.reqRes.deleteUser(this.user.id).subscribe( (data: any) => {
      this.deleted = true;
    } , (error: any) => {
      this.deleted = false;
    })
  }

}
