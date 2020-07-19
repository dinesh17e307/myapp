import { Component, OnInit } from '@angular/core';
import { Sch } from '../share/sch';
import {DishServicesService} from '../services/dish-services.service';
@Component({
  selector: 'app-listsch',
  templateUrl: './listsch.component.html',
  styleUrls: ['./listsch.component.scss']
})
export class ListschComponent implements OnInit {
  
  dishes: Sch[];
   selecteddish:Sch;
  constructor(private dishservice:DishServicesService) {}

  ngOnInit(): void {
    this.dishes=this.dishservice.getdishes();
  }
  onSelect(dish: Sch) {
    this.selecteddish = dish;
  }

}
