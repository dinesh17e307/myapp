import { Component, OnInit } from '@angular/core';
import { Sch } from '../share/sch';
import { DISHES } from '../share/dishes';
@Component({
  selector: 'app-listsch',
  templateUrl: './listsch.component.html',
  styleUrls: ['./listsch.component.scss']
})
export class ListschComponent implements OnInit {
  
  dishes: Sch[] = DISHES;
   selecteddish:Sch;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(dish: Sch) {
    this.selecteddish = dish;
  }

}
