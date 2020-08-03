import { Component, OnInit } from '@angular/core';
import { Params,ActivatedRoute}from '@angular/router';
import{Location} from '@angular/common';
import {Sch} from '../share/sch';
import {DishServicesService} from '../services/dish-services.service';
@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {

    dish:Sch;
  constructor(private dishservice:DishServicesService,private route:ActivatedRoute
    ,private location:Location) { }

    ngOnInit() {
      let id = this.route.snapshot.params['id'];
      this.dish = this.dishservice.getDish(id);
    }
    goBack(): void {
      this.location.back();
    }
}
