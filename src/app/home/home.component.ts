import { Component, OnInit } from '@angular/core';
import { Sch } from '../share/sch';
import { DishServicesService } from '../services/dish-services.service';
import { Promotion } from '../share/promotion';
import { PromotionService } from '../services/promotion.service';
import{Leader} from '../share/leader';
import{LeaderService} from '../services/leader.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Sch;
  promotion: Promotion;
  leader:Leader;

  constructor(private dishservice: DishServicesService,
    private promotionservice: PromotionService,private leaderservice:LeaderService) { }

  ngOnInit() {
    this.dish = this.dishservice.getFeaturedDish();
    this.promotion = this.promotionservice.getFeaturedPromotion();
    this.leader=this.leaderservice.getFeaturedleader();
  }
}
