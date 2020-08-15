import { Component, OnInit,Inject } from '@angular/core';
import { Sch } from '../share/sch';
import {DishServicesService} from '../services/dish-services.service';
@Component({
  selector: 'app-listsch',
  templateUrl: './listsch.component.html',
  styleUrls: ['./listsch.component.scss']
})
export class ListschComponent implements OnInit {
  
  dishes: Sch[];
  errormsg:string;
  constructor(private dishservice:DishServicesService,@Inject('BaseURL') private BaseURL) {}

  ngOnInit(): void {
    this.dishservice.getdishes()
      .subscribe(dishes => this.dishes = dishes,errormsg=>this.errormsg=<any>errormsg);
  }


}
