import { Component, OnInit,Inject } from '@angular/core';
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
  dishmsg:string;
  promomsg:string;
  leadermsg:string;

  constructor(private dishservice: DishServicesService,
    private promotionservice: PromotionService,private leaderservice:LeaderService,@Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(dish=>this.dish=dish,dishmsg=>this.dishmsg=<any>dishmsg);
    this.promotionservice.getFeaturedPromotion().subscribe(promotion => this.promotion=promotion,promomsg=>this.promomsg=<any>promomsg);
    this.leaderservice.getFeaturedleader().subscribe(leader=>this.leader=leader,leadermsg=>this.leadermsg=<any>leadermsg);
  }
}
