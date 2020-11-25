import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input() items: any[] = [];

  verUsers(item){
    console.log(item);
    let userId;
    userId = item.id;
    this.Router.navigate(['/get-user', userId])
  }

  constructor( private Router: Router ) { }

  ngOnInit(): void {
  }

}
