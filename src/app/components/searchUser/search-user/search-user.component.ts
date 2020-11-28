import { Component, OnInit } from '@angular/core';
import { AppReqResService } from 'src/app/services/app-req-res.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styles: [
  ]
})
export class SearchUserComponent implements OnInit {
  result: any = [];
  searching: boolean = true;
  error: boolean;

  constructor( private appReqRes: AppReqResService) { }

  ngOnInit(): void {
  }

  search(id){
    if(id===''){
      this.searching = true;
      this.error = false;
      return this.result = [];
    }
    this.appReqRes.searchUsers(id).subscribe((data: any) => {
      console.log(data.data);
      this.result = data.data;
      this.searching = false;
      this.error = false;
    }, (error: any) => {
      this.searching = false;
      this.error = true;
    })
  }

}
